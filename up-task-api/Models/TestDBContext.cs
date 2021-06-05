using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace UP.Test.API.Models
{
    public class TestDBContext : DbContext
    {
        public TestDBContext() { }
        public TestDBContext(DbContextOptions<TestDBContext> options) : base(options) {}

        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }

    }
}
