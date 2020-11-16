using System.Collections.Generic;

namespace ert_beer_app.Services
{
    public interface IStorageService
    {
        void AddToFavorites(int id);

        IEnumerable<int> GetFavorites();
    }
}