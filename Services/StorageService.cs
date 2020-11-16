using System.Collections.Generic;

namespace ert_beer_app.Services
{
    public class StorageService : IStorageService
    {
        private readonly HashSet<int> _favoriteIds  = new HashSet<int> {1, 2};
        
        public void AddToFavorites(int id)
        {
            _favoriteIds.Add(id);
        }

        public IEnumerable<int> GetFavorites()
        {
            return _favoriteIds;
        }
    }
}