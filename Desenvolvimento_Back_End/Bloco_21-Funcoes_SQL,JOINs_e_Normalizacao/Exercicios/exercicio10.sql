SELECT
	DEPARTMENT_ID,
    AVG(salary) AS 'Média salarial',
    COUNT(*) AS 'Número de funcionários'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) > 10;