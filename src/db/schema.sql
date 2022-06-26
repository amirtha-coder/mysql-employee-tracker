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
  title VARCHAR(255) NOT NULL,
  salary DECIMAL(8,2)NOT NULL,
  departmentId INT NOT NULL,
  FOREIGN KEY(departmentId) REFERENCES department(id),
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  roleId INT NOT NULL,
  managerId INT NOT NULL, 
  FOREIGN KEY (roleId) REFERENCES role(id),
  PRIMARY KEY (id),
  INDEX manager_index(managerId),
  CONSTRAINT Fk_manager FOREIGN KEY (managerId)
  REFERENCES employee(id)
);