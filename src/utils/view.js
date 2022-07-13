const mysql = require("mysql2");

const getDepartmentsfromDB = async (executeQuery) => {
  const department = await executeQuery("SELECT * FROM department");
  console.table(department);
};

const getRolesfromDB = async (executeQuery) => {
  const employee = await executeQuery("SELECT * FROM role");
  console.table(employee);
};

const getEmployeesforDB = async (executeQuery) => {
  const employee = await executeQuery("SELECT * FROM employee");
  console.table(employee);
};

module.exports = {
  getDepartmentsfromDB,
  getRolesfromDB,
  getEmployeesforDB,
};
