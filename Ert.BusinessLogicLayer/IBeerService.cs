using System.Collections.Generic;
using System.Threading.Tasks;

using Ert.DataAccessLayer;

namespace Ert.BusinessLogicLayer
{
    public interface IBeerService
    {
        Task AddOrUpdate(ICollection<Beer> beers, string email);
        Task<ICollection<Beer>> GetFavourites(string email);
    }
}
