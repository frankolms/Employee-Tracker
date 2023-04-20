const mysql = require("mysql2/promise");

viewAllDepartments = async () => {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Coheedman94?123",
    database: "company_db",
  });

  const results = await db.query("SELECT * FROM department");

  console.table([...results[0]]);
};

viewAllRoles = async () => {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Coheedman94?123",
    database: "company_db",
  });

  const results = await db.query(
    "SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id"
  );

  console.table([...results[0]]);
};

addDepartment = async () => {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Coheedman94?123",
    database: "company_db",
  });
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
};
