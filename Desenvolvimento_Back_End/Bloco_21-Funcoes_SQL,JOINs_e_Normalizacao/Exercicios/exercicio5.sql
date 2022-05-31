SELECT 
	ROUND(MAX(salary), 2) AS 'Salário máximo',
    ROUND(MIN(salary), 2) AS 'Salário mínimo',
    ROUND(SUM(salary), 2) AS 'Salário Total',
    ROUND(AVG(salary), 2) AS 'Média salarial'
FROM hr.employees;
