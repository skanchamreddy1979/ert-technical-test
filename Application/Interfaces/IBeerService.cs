using System.Collections.Generic;
using Application.ViewModel;
using Domain;

namespace Application.Interfaces
{
    public interface IBeerService
    {
        IEnumerable<BeerViewModel> GetAll();
        Beer Get(int id);
        void AddFavorites(IEnumerable<int> ids, string email);
        IEnumerable<BeerViewModel> GetFavorites(string email);
    }
}
