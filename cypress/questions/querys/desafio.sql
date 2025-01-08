⦁Escreva a consulta SQL para listar o nome de todos os alunos matriculados na   disciplina de Cálculo do professor João.
SELECT ALUNO.nome 
FROM disciplina.ALUNO
WHERE ALUNO.id_disciplina = (
 SELECT LECIONA.id_disciplina
 FROM leciona.LECIONA
 JOIN professor.PROFESSOR ON LECIONA.id_professor = PROFESSOR.id_professor
 WHERE PROFESSOR.nome = 'João' AND LECIONA.id_disciplina = (
 SELECT id_disciplina
 FROM disciplina.DISCIPLINA
 WHERE nome = 'Cálculo'
 )
);

⦁Escreva a consulta SQL para exibir a quantidade de alunos por disciplinas.
SELECT DISCIPLINA.nome AS disciplina, COUNT(CURSA.coda) AS quantidade_alunos
FROM DISCIPLINA
JOIN CURSA ON DISCIPLINA.codd = CURSA.codd
GROUP BY DISCIPLINA.nome;

⦁Escreva a consulta SQL para listar as disciplinas que todos os professores lecionam.
SELECT DISCIPLINA.nome AS disciplina
FROM DISCIPLINA
JOIN LECIONA ON DISCIPLINA.codd = LECIONA.codd
GROUP BY DISCIPLINA.nome
HAVING COUNT(DISTINCT LECIONA.codp) = (SELECT COUNT(*) FROM PROFESSOR);

⦁Escreva a consulta SQL que exibe o total de professores.
SELECT COUNT(*) AS total_professores
FROM PROFESSOR;

⦁Escreva a consulta SQL para listar todos os alunos que cursaram alguma disciplina do ano 2000 até 2020.
 SELECT ALUNO.nome AS aluno
FROM ALUNO
JOIN CURSA ON ALUNO.coda = CURSA.coda
WHERE CURSA.ano BETWEEN 2000 AND 2020;