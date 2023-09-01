IF DB_ID('EmployeeDB') IS NULL
	CREATE DATABASE EmployeeDB;

GO

CREATE TABLE EmployeeDB.dbo.Employees(
    id int,
    first_name varchar(255),
	last_name varchar(255),
    salary int
)
GO

INSERT INTO EmployeeDB.dbo.Employees(id, first_name, last_name, salary)
VALUES	
(1, 'Lewis', 'Burson', 40700),
(2, 'Ian', 'Malcolm', 70000),
(3, 'Ellie', 'Sattler', 102000),
(4, 'Dennis', 'Nedry', 52000),
(5, 'John', 'Hammond', 89600),
(6, 'Ray', 'Arnold', 45000),
(7, 'Laura', 'Burnett', 102000);

GO