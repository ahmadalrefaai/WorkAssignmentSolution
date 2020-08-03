using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkProject.Context;
using WorkProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WorkProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        readonly EmployeeContext eDetails;
        public EmployeeController(EmployeeContext employeeContext)
        {
            eDetails = employeeContext;
        }

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            var data = eDetails.Employee.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee obj)
        {
            var data = eDetails.Employee.Add(obj);
            eDetails.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee obj)
        {
            var data = eDetails.Employee.Update(obj);
            eDetails.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = eDetails.Employee.Where(a => a.eId == id).FirstOrDefault();
            eDetails.Employee.Remove(data);
            eDetails.SaveChanges();
            return Ok();

        }
    }
}