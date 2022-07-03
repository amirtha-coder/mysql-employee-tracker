const initDatabase = require("../connection");

const chooseDepartment = async () => {
  const { executeQuery } = await initDatabase({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const dept = await executeQuery("SELECT * FROM department");

  return dept.map((department) => {
    return {
      name: department.departmentName,
      value: department.departmentId,
      short: department.departmentName,
    };
  });
};
const chooseRole = async () => {
  const { executeQuery } = await initDatabase({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const getRole = await executeQuery("SELECT * FROM role");

  return getRole.map((getRole) => {
    return {
      name: getRole.title,
      value: getRole.departmentId,
    };
  });
};

const chooseEmployee = async () => {
  const { executeQuery } = await initDatabase({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const getEmployee = await executeQuery("SELECT * FROM employee");
  return getEmployee.map((getEmployee) => {
    return {
      name: getEmployee.title,
      value: getEmployee.departmentId,
    };
  });
};

module.exports = {
  chooseDepartment,
  chooseRole,
  chooseEmployee,
};
