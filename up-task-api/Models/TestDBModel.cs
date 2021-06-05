using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace UP.Test.API.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        [Column(TypeName="varchar(100)")]
        public string DepartmentName { get; set; }
        public ICollection<Employee> Employees { get; set; }
    }

    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string EmployeeName { get; set; }

        [ForeignKey("Department")]
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
