using System.IO;
using System.Reflection;

using ert_beer_app.Models;

using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.DataAccess
{
    public class BeerContext : DbContext
    {
        public BeerContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserFavourite>().HasKey(sc => new { sc.UserId, sc.BeerId });

            modelBuilder.Entity<UserFavourite>()
                        .HasOne<User>(sc => sc.User)
                        .WithMany(s => s.Favourites)
                        .HasForeignKey(sc => sc.UserId);
        }

        public DbSet<User> Users { get; set; }  

        public DbSet<Beer> Beers { get; set; }

        public DbSet<UserFavourite> UserFavourites { get; set; }
    }
}
