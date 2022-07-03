const initDatabase = require("../connection");

const chooseDepartment = async () => {
  const { executeQuery } = await initDatabase({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const dept = await executeQuery("SELECT * FROM department");
  console.log(dept);
  return dept.map((department) => {
    return {
      name: department.departmentName,
      value: department.id,
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

  return getRole.map((role) => {
    return {
      name: role.title,
      value: role.id,
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
  return getEmployee.map((manager) => {
    return {
      name: `${manager.firstName} ${manager.lastName} `,
      value: manager.id,
    };
  });
};

module.exports = {
  chooseDepartment,
  chooseRole,
  chooseEmployee,
};
