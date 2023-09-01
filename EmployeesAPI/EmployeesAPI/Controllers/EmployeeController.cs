using EmployeesAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        // Controller construction, context for the CRUD operations
        private readonly DataContext _context;
        public EmployeeController(DataContext context)
        {
            _context = context;

        }

        // GET operation
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            return Ok(await _context.Employees.ToListAsync());
        }

        //  POST operation
        [HttpPost]
        public async Task<ActionResult<List<Employee>>> AddEmployees(Employee person)
        {
            _context.Employees.Add(person);
            await _context.SaveChangesAsync();

            return Ok(await _context.Employees.ToListAsync());
        }

        // PUT operation
        [HttpPut]
        public async Task<ActionResult<List<Employee>>> EditEmployees(Employee person)
        {
            var targetEmployee = await _context.Employees.FindAsync(person.id);
            if (targetEmployee == null)
            {
                return BadRequest("Invalid Employee ID.");
            }

            targetEmployee.first_name = person.first_name;
            targetEmployee.last_name = person.last_name;
            targetEmployee.salary = person.salary;

            await _context.SaveChangesAsync();

            return Ok(await _context.Employees.ToListAsync());
        }

        // DELETE operation, added routing parameter on the attribute
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Employee>>> DeleteEmployees(int id)
        {
            var targetEmployee = await _context.Employees.FindAsync(id);
            if (targetEmployee == null)
            {
                return BadRequest("Invalid Employee ID.");
            }

            _context.Employees.Remove(targetEmployee);
            await _context.SaveChangesAsync();

            return Ok(await _context.Employees.ToListAsync());
        }


    }
}
