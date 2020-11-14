using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Model
{
    public class BrewDogContext: DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Favourite> Favourites { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite("Filename=BrewDog.db");
        }
    }
}
