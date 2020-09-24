using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ert.DataAccessLayer
{
    public interface IBeerRepository
    {
        Task AddOrUpdate(ICollection<Beer> beers, string userId);
        Task<ICollection<Beer>> GetFavourites(string userId);
    }
}
