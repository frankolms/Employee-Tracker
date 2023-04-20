SELECT employee.id, employee.first_name, employee.last_name, employee.role_id AS title, employee.manager_id AS manager
FROM employee 
JOIN role ON employee.role_id = role.id