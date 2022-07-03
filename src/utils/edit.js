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
const addEmployeeToDB = async (executeQuery, answers) => {
  const employee = await executeQuery(
    `INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( '${answers.firstName}', '${answers.lastName}', ${answers.employeeRole}, ${answers.manager});`
  );
  const updatedEmployee = await executeQuery("SELECT * FROM employee");
  console.table(employee);
  console.table(updatedEmployee);
};
const updatedEmployeeRoleToDB = async (executeQuery, answers) => {
  const employee = await executeQuery(
    `UPDATE employee SET managerId = '${answers.updateRole}' WHERE (id = '${answers.id}');`
  );
  const updatedEmployee = await executeQuery("SELECT * FROM employee");
  console.table(employee);
  console.table(updatedEmployee);
};

module.exports = {
  addDepartmentToDB,
  addRoleToDB,
  addEmployeeToDB,
  updatedEmployeeRoleToDB,
};
