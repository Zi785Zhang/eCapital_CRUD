using Microsoft.EntityFrameworkCore.Migrations;
using System.Collections.Generic;

#nullable disable

namespace EmployeesAPI.Migrations
{
    /// <inheritdoc />
    public partial class data : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("SET IDENTITY_INSERT EmployeeDB.dbo.Employees ON ");
            migrationBuilder.Sql(
                "INSERT INTO EmployeeDB.dbo.Employees(id, first_name, last_name, salary)" +
                "VALUES"+
                "(1, 'Lewis', 'Burson', 40700), " +
                "(2, 'Ian', 'Malcolm', 70000), " +
                "(3, 'Ellie', 'Sattler', 102000), " +
                "(4, 'Dennis', 'Nedry', 52000), " +
                "(5, 'John', 'Hammond', 89600)," +
                "(6, 'Ray', 'Arnold', 45000)," +
                "(7, 'Laura', 'Burnett', 102000)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
