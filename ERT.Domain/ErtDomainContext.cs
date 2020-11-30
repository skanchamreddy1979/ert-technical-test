using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using ERT.Domain;

namespace ERT.Domain
{
    public class ErtDomainContext : DbContext
    {
        public ErtDomainContext()
        {
        }
        public ErtDomainContext(DbContextOptions<ErtDomainContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlite("Filename=ERTDatabase.db", options =>
                //{
                //    options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
                //});
            }
        }

        public DbSet<Beer> Beers { get; set; }

        public DbSet<Fevorite> Fevorites { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
