SELECT 
	JOB_ID, AVG(salary) AS 'Média salarial'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY AVG(salary) DESC;
