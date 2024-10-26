const express = require('express');
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5173;

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "takume31",
    database: "postgres"
});

// Conexão com o banco de dados
client.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso');
    }
});

// Lê e executa o arquivo SQL
fs.readFile('C:/Users/nakam/OneDrive/Documentos/Banco de dados/tra.sql', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo SQL:', err);
        return;
    }
    client.query(data, (err) => {
        if (err) {
            console.error('Erro ao executar o SQL:', err);
        } else {
            console.log('SQL executado com sucesso.');
        }
    });
});

// Rota para buscar os dados da tabela ALUNO
app.get('/alunos', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM ALUNO;');
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao consultar dados:', error);
        res.status(500).send('Erro ao consultar dados');
    }
});

// Rota para servir o HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
