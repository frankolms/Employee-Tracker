const inquirer = require("inquirer");
const { viewAllDepartments } = require("./queries/query");
const questions = [
  {
    type: "list",
    name: "choice",
    message: "What do you want to do?",
    choices: ["View all departments"],
  },
];

init = async () => {
  const results = await inquirer.prompt(questions);
  if (results.choice === "View all departments") {
    viewAllDepartments();
  }
};

init();
