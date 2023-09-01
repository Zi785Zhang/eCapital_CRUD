using Microsoft.AspNetCore.Mvc;


namespace EmployeesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployee()
        {
            return new List<Employee> {
                new Employee {
                    Id = 1,
                    FirstName = "Zijian",
                    LastName = "Zhang",
                    Salary = 100000}
            };
        }
    }
}
