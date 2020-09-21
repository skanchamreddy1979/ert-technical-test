using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Application.Interfaces
{
    public interface IBeerDBContext
    {
        DbSet<Favourites> Favorites { get; set; }
        Task<int> SaveChangesAsync();
    }
}
