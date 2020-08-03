

using WorkProject.Models;
using Microsoft.EntityFrameworkCore;
using System;


namespace WorkProject.Context
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
        }
        public DbSet<Employee> Employee { get; set; }

    }
}