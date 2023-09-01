IF DB_ID('EmployeeDB') IS NULL
	CREATE DATABASE EmployeeDB;

GO

CREATE TABLE EmployeeDB.dbo.Employees(
	[id] [int] IDENTITY(1,1) NOT NULL,
	[first_name] [nvarchar](max) NOT NULL,
	[last_name] [nvarchar](max) NOT NULL,
	[salary] [int] NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF ) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

SET IDENTITY_INSERT EmployeeDB.dbo.Employees ON 

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