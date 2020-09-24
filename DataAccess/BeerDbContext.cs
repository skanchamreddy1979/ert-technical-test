using ert_beer_app.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.DataAccess
{
    public class BeerDbContext : DbContext
    {
        private readonly string _connectionString;

        public BeerDbContext(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("BeerDbConnectionString");
        }

        public DbSet<FavoriteBeerModel> FavoriteBeers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
            base.OnConfiguring(optionsBuilder);
        }
    }
}
