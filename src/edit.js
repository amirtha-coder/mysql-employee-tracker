const addDepartmentToDB = async (executeQuery, answers) => {
  const department = await executeQuery(
    `INSERT INTO department (departmentName) VALUES ('${answers.departmentName}' );`
  );

  const updatedDepartment = await executeQuery("SELECT * FROM department");
  console.table(department);
  console.table(updatedDepartment);
};
const addRoleToDB = async (executeQuery, answers) => {
  const role = await executeQuery(
    `INSERT INTO role (title, salary, departmentId) VALUES ('${answers.roleTitle}','${answers.roleSalary}',${answers.roleDepartment})`
  );
  const updatedRole = await executeQuery("SELECT * FROM role");
  console.table(role);
  console.table(updatedRole);
};
const addEmployeeToDB = () => {};
const updatedEmployeeRoleToDB = () => {};

module.exports = {
  addDepartmentToDB,
  addRoleToDB,
  addEmployeeToDB,
  updatedEmployeeRoleToDB,
};
