USE management_db;

INSERT INTO department (id, departmentName) VALUES ('1', 'HR');
INSERT INTO department (id, departmentName) VALUES ('2', 'IT');
INSERT INTO department (id, departmentName) VALUES ('3', 'Finance');
INSERT INTO department (id, departmentName) VALUES ('4', 'Marketing');

INSERT INTO role (id, title, salary, departmentId) VALUES ('1', 'Jr Analyst', '34000', 3);
INSERT INTO role (id, title, salary, departmentId) VALUES ('2', 'Snr Analyst', '55000', 3);
INSERT INTO role (id, title, salary, departmentId) VALUES ('3', 'Market Exec', '40000', 4);
INSERT INTO role (id, title, salary, departmentId) VALUES ('4', 'IT support', '45000', 2);
INSERT INTO role (id, title, salary, departmentId) VALUES ('5', 'HR partner', '60000', 1);
INSERT INTO role (id, title, salary, departmentId) VALUES ('6', 'HR manager', '29000', 1);


INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('1', 'Bob', 'Duncan', 1);
INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('2', 'Charlie', 'Smith', 2);
INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('3', 'Devi', 'Prasad', 1);
INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('4', 'Carol', 'Shipman', 2);
INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('5', 'Tom', 'Davies', 3);
INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('6', 'Trey', 'Jones', 5);
INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('7', 'Tim', 'Peak', 6);
INSERT INTO employee (id, firstName, lastName, roleId) VALUES ('8', 'Chris', 'Lyon', 4);

UPDATE employee SET managerId = '2' WHERE (`id` = '1');
UPDATE employee SET managerId = '2' WHERE (`id` = '3');
UPDATE employee SET managerId = '2' WHERE (`id` = '4');
UPDATE employee SET managerId = '7' WHERE (`id` = '6');



