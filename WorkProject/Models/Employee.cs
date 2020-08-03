
using System;
using System.ComponentModel.DataAnnotations;

namespace WorkProject.Models
{
    public class Employee
    {
        [Key]
        public int? eId { get; set; }
        public string eName { get; set; }
        public string eAddress { get; set; }
        public string eEmail { get; set; }
        public int eAge { get; set; }
    }
}
