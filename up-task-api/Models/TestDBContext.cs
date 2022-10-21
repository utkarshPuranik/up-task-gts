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
    public class CosmosTestDBContext : DbContext
    {
        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        //public CosmosTestDBContext() { }
        public CosmosTestDBContext(DbContextOptions<CosmosTestDBContext> options) : base(options) { }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseCosmos("https://localhost:8081", "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==", databaseName: "CosmosTestDB");
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>().ToContainer("Departments");
            modelBuilder.Entity<Department>().HasPartitionKey(x => x.partitionKey);
            //modelBuilder.Entity<Employee>().ToContainer("Employees");
            //modelBuilder.Entity<Employee>().HasPartitionKey(x => x.EmployeeId);
            //modelBuilder.Entity<Employee>().OwnsOne<Department>(x => x.Department);

        }
    }
}
