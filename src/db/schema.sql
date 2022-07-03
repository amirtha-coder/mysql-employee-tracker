DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db ;

USE management_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2)NOT NULL,
  departmentId INT NOT NULL,
  FOREIGN KEY (departmentId) REFERENCES department (id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  roleId INT NOT NULL,
  managerId INT, 
  FOREIGN KEY (roleId) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY (managerId) REFERENCES employee(id) ON DELETE SET NULL,
  PRIMARY KEY (id)
);