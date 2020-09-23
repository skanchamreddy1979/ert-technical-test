using DAL;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace BLL
{
    public interface IBeerService
    {
        Task AddOrUpdate(ICollection<Beer> beers, string email);
    }
}
