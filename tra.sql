
SELECT schema_name 
FROM information_schema.schemata;

CREATE TABLE ALUNO (
    RA VARCHAR(255) NOT NULL,
    NOME VARCHAR(255) NOT NULL,
    EDUCACENSO VARCHAR(1) NOT NULL,
    DATANACIMENTO DATE NOT NULL,
    IDADE VARCHAR(200) NOT NULL,
    CPF CHAR(11) NOT NULL
);

INSERT INTO ALUNO (RA, NOME, EDUCACENSO, DATANACIMENTO, IDADE, CPF) VALUES
('817', 'Edson Lopes da Cruz', '', '1988-11-13', '35 anos', '01640602194'),
('816', 'Rafael da Silva Ramalho', '', '2016-01-15', '8 anos', '07480751192'),
('815', 'Maria Clara Alberto Servignani', '', '2023-10-12', '0 anos', '00873390130'),
('814', 'Enzo Eduardo Ferraz Rios Lopes', '', '2015-07-14', '9 anos', '09872133182'),
('813', 'Pietro Vieira Matias Lemos', '', '2015-06-06', '9 anos', '11825726183'),
('812', 'Maité Sofia da Silva Matos Oliveira', '', '2018-12-13', '5 anos', '56242599805'),
('811', 'Heitor Fortine da Silva', '', '2021-03-08', '3 anos', '11096177129');
