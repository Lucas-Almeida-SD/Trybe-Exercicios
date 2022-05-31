SELECT JOB_ID, SUM(salary) AS 'Dinheiro necessário' FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';