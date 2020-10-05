using System.Threading.Tasks;
using ert_beer_app.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Data.Interfaces
{
    public interface IBeerContext
    {
        DbSet<FavoriteBeer> Favorites { get; set; }
        Task<int> SaveChangesAsync();
    }
}
