using System.Threading.Tasks;
using ert_beer_app.Data.Interfaces;
using ert_beer_app.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Data
{
    public class BeerContext :  DbContext, IBeerContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=beers.db");
        public DbSet<FavoriteBeer> Favorites { get; set; }
        
        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }
    }
}
