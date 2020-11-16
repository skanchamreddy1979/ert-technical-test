using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{
    [Route("api/beer")]
    [ApiController]
    public class BeerController : ControllerBase
    {
        public HashSet<int> FavoriteIds { get; set; } = new HashSet<int>() {1, 2};
        
        [HttpPost]
        public void AddToFavorite(int id)
        {
            FavoriteIds.Add(id);
        }

        [HttpGet]
        public IEnumerable<int> GetFavorites()
        {
            return FavoriteIds;
        }
    }
}