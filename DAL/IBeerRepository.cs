using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL
{
    public interface IBeerRepository
    {
        Task AddOrUpdate(ICollection<Beer> beers, string userId);
    }
}
