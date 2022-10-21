using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Newtonsoft.Json;

namespace UP.Test.API.Models
{
    public class Department
    {
        [JsonProperty(PropertyName = "id")]
        public string partitionKey { get; set; }
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
    }

    public class Employee
    {
        public string partitionKey { get; set; }
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int DepartmentId { get; set; }
        //public Department Department { get; set; }
    }
}
