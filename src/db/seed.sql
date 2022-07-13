USE management_db;

INSERT INTO department (departmentName) VALUES ( 'HR');
INSERT INTO department (departmentName) VALUES ('IT');
INSERT INTO department (departmentName) VALUES ('Finance');
INSERT INTO department (departmentName) VALUES ('Marketing');

INSERT INTO role (title, salary, departmentId) VALUES ( 'Jr Analyst', '34000', 3);
INSERT INTO role (title, salary, departmentId) VALUES ( 'Snr Analyst', '55000', 3);
INSERT INTO role (title, salary, departmentId) VALUES ( 'Market Exec', '40000', 4);
INSERT INTO role (title, salary, departmentId) VALUES ( 'IT support', '45000', 2);
INSERT INTO role ( title, salary, departmentId) VALUES ('HR partner', '60000', 1);
INSERT INTO role ( title, salary, departmentId) VALUES ('HR manager', '29000', 1);


INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( 'Bob', 'Duncan', 1, NULL);
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ('Charlie', 'Smith', 2, NULL);
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( 'Devi', 'Prasad', 1, NULL);
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( 'Carol', 'Shipman', 2, NULL);
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( 'Tom', 'Davies', 3, NULL);
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( 'Trey', 'Jones', 5, NULL);
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( 'Tim', 'Peak', 6, NULL);
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ( 'Chris', 'Lyon', 4, NULL);

UPDATE employee SET managerId = '4' WHERE (id = '3');
UPDATE employee SET managerId = '7' WHERE (id = '6');
UPDATE employee SET managerId = '5' WHERE (id = '4');



