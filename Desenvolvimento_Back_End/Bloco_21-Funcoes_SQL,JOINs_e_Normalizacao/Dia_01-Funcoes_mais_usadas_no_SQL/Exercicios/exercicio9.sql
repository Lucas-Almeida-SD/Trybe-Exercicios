SELECT JOB_ID, AVG(salary) AS 'Média salarial' FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID != 'IT_PROG'
ORDER BY AVG(salary) DESC;