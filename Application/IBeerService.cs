using System.Collections.Generic;

namespace Application
{
    public interface IBeerService
    {
        IEnumerable<BeerViewModel> GetAll();
        Beer Get(int id);
        void AddFavorites(IEnumerable<int> ids, string email);
        IEnumerable<BeerViewModel> GetFavorites(string email);
    }
}
