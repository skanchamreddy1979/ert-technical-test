using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Beer> Beers { get; set; }

    }
}
