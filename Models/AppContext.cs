using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Models
{
    public class AppContext : DbContext
    {
        public DbSet<Beer> Beers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<FavouriteBeer> FavouriteBeers { get; set; }

        public AppContext(DbContextOptions<AppContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasAlternateKey(x => x.Email);
        }
    }
}