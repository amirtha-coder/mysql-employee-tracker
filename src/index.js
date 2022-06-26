// global declarations || imports
const inquirer = require("inquirer");
const questions = [
  {
    type: "list",
    message: "Please select an option",
    choices: [
      {
        name: "View all departments",
        value: "allDepartments",
        short: "allDepartments",
        loop: true,
      },
      {
        name: "View all roles",
        value: "allRoles",
        short: "allRoles",
        loop: true,
      },
      {
        name: "View all employees",
        value: "allEmployees",
        short: "allEmployees",
        loop: true,
      },
      {
        name: "Add a department",
        value: "addDepartment",
        short: "addDepartment",
        loop: true,
      },
      {
        name: "Add a role",
        value: "addRole",
        short: "addRole",
        loop: true,
      },
      {
        name: "Add an employee",
        value: "addEmployee",
        short: "addEmployee",
        loop: true,
      },
      {
        name: "Update an employee role",
        value: "updateRole",
        short: "updateRole",
        loop: true,
      },
      {
        name: "Quit",
        value: "quit",
        short: "quit",
        loop: false,
      },
    ],
    name: "options",
  },
  {
    type: "input",
    message: "please enter a department name?",
    name: "departmentName",
    when: (answers) => answers.options === "addDepartment",
    validate: (answer) => {
      return answer ? true : "Please enter the name to continue";
    },
  },
  {
    type: "input",
    message: "Please enter the role title",
    name: "roleTitle",
    when: (answers) => answers.options === "addRole",
    validate: (answer) => {
      return answer ? true : "Please enter title to continue";
    },
  },
  {
    type: "input",
    message: "Please enter the role salary",
    name: "roleSalary",
    when: (answers) => answers.options === "addRole",
    validate: (answer) => {
      return answer ? true : "Please enter the salary to continue";
    },
  },
  {
    type: "input",
    message: "Please enter employee's first name",
    name: "firstName",
    when: (answers) => answers.options === "addEmployee",
    validate: (answer) => {
      return answer ? true : "Please enter the first name to continue";
    },
  },
  {
    type: "input",
    message: "please enter your employee's last name",
    name: "lastName",
    when: (answers) => answers.options === "addEmployee",
    validate: (answer) => {
      return answer ? true : "Please enter the last name to continue";
    },
  },
  {
    type: "input",
    message: "Please enter your employee's role :",
    name: "employeeRole",
    when: (answers) => answers.options === "addEmployee",
    validate: (answer) => {
      return answer ? true : "Please enter the role to continue";
    },
  },
  {
    type: "input",
    message: "Please enter youe employee's manager:",
    name: "manager",
    when: (answers) => answers.options === "addEmployee",
    validate: (answer) => {
      return answer ? true : "Please enter the maanager to continue";
    },
  },
];
const init = () => {
  let inProgress = true;

  while (inProgress) {
    const answers = inquirer.prompt(questions);

    if (answers.options === "quit") {
      inProgress = false;
      console.table(answers);
    }
  }
};
init();
