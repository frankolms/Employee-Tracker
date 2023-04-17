const mysql = require("mysql2/promise");

viewAllDepartments = async () => {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Coheedman94?123",
    database: "company_db",
  });

  const results = await db.query(
    "SELECT id, dpt_name AS Department FROM department"
  );

  await console.table([...results[0]]);
};

module.exports = {
  viewAllDepartments,
};
