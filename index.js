const inquirer = require("inquirer");
const { viewAllDepartments, viewAllRoles } = require("./queries/query");
const questions = [
  {
    type: "list",
    name: "choice",
    message: "What do you want to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
  {
    type: "input",
    name: "addDepartment",
    message: "What department would you like to add?",
    when: (answers) => answers.choice === "Add a department",
  },
];

init = async () => {
  const results = await inquirer.prompt(questions);
  if (results.choice === "View all departments") {
    viewAllDepartments();
  } else if (results.choice === "View all roles") {
    viewAllRoles();
  }
};

init();
