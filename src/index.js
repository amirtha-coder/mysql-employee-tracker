// global declarations || imports
require("dotenv").config();
const initDatabase = require("./connection");
const inquirer = require("inquirer");
const {
  getDepartmentsfromDB,
  getRolesfromDB,
  getEmployeesforDB,
} = require("./utils/view");
const {
  addDepartmentToDB,
  addRoleToDB,
  addEmployeeToDB,
  updatedEmployeeRoleToDB,
} = require("./utils/edit");
const {
  chooseDepartment,
  chooseEmployee,
  chooseRole,
} = require("./utils/utils");

const init = async () => {
  const { executeQuery, closeConnection } = await initDatabase({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const dept = await executeQuery("SELECT * FROM department");

  const getRole = await executeQuery("SELECT * FROM role");
  const getEmployee = await executeQuery("SELECT * FROM employee");

  const questions = [
    {
      type: "list",
      message: "Please select an option",
      choices: [
        {
          name: "View all departments",
          value: "allDepartments",
          short: "allDepartments",
        },
        {
          name: "View all roles",
          value: "allRoles",
          short: "allRoles",
        },
        {
          name: "View all employees",
          value: "allEmployees",
          short: "allEmployees",
        },
        {
          name: "Add a department",
          value: "addDepartment",
          short: "addDepartment",
        },
        {
          name: "Add a role",
          value: "addRole",
          short: "addRole",
        },
        {
          name: "Add an employee",
          value: "addEmployee",
          short: "addEmployee",
        },
        {
          name: "Update an employee role",
          value: "updateEmployeeRole",
          short: "updateEmployeeRole",
        },
        {
          name: "quit",
          value: "quit",
          short: "quit",
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
      type: "list",
      message: "Please choose the department?",
      name: "roleDepartment",
      choices: await chooseDepartment(dept),
      when: (answers) => answers.options === "addRole",
      validate: (answer) => {
        return answer ? true : "Please enter the department to continue";
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
      type: "list",
      message: "Please enter your employee's role :",
      name: "employeeRole",
      choices: await chooseRole(getRole),
      when: (answers) => answers.options === "addEmployee",
      validate: (answer) => {
        return answer ? true : "Please enter the role to continue";
      },
    },
    {
      type: "list",
      message: "Please enter youe employee's manager:",
      name: "manager",
      choices: await chooseEmployee(getEmployee),
      when: (answers) => answers.options === "addEmployee",
      validate: (answer) => {
        return answer ? true : "Please enter the maanager to continue";
      },
    },
    {
      type: "list",
      message: "Please enter youe employee's role",
      name: "updateRole",
      choices: await chooseRole(getRole),
      when: (answers) => answers.options === "updateEmployeeRole",
      validate: (answer) => {
        return answer ? true : "Please enter the role to continue";
      },
    },
    {
      type: "list",
      message: "Please enter youe employee's manager",
      name: "id",
      choices: await chooseEmployee(getEmployee),
      when: (answers) => answers.options === "updateEmployeeRole",
      validate: (answer) => {
        return answer ? true : "Please enter the manager to continue";
      },
    },
  ];

  let inProgress = true;

  while (inProgress) {
    const answers = await inquirer.prompt(questions);

    if (answers.options === "allDepartments") {
      await getDepartmentsfromDB(executeQuery);
    }
    if (answers.options === "roleDepartment") {
    }
    if (answers.options === "allRoles") {
      await getRolesfromDB(executeQuery);
    }
    if (answers.options === "allEmployees") {
      await getEmployeesforDB(executeQuery);
    }
    if (answers.options === "addDepartment") {
      await addDepartmentToDB(executeQuery, answers);
    }

    if (answers.options === "addRole") {
      await addRoleToDB(executeQuery, answers);
    }
    if (answers.options === "addEmployee") {
      await addEmployeeToDB(executeQuery, answers);
    }
    if (answers.options === "updateRole") {
      await updatedEmployeeRoleToDB(executeQuery, answers);
    }

    if (answers.options === "quit") {
      inProgress = false;

      await closeConnection();
      process.exit();
    }
  }
};

init();
