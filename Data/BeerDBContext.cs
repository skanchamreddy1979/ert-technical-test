using Microsoft.EntityFrameworkCore;
using ert_beer_app.Models;

namespace ert_beer_app.Data
{

    public class BeerDBContext : DbContext
    {
        public BeerDBContext(DbContextOptions<BeerDBContext> options) :
            base(options)
        {

        }
        public DbSet<BeerModel> Beers { get; set; }

    }
}
