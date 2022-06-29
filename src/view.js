const mysql = require("mysql2");

const getDepartmentsfromDB = async (executeQuery) => {
  const department = await executeQuery("SELECT * FROM department");
  console.table(department);
};

const getRolesfromDB = async (db) => {};

const getEmployeesforDB = async (db) => {};

module.exports = { getDepartmentsfromDB, getRolesfromDB, getEmployeesforDB };
