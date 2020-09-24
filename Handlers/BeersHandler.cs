using ert_beer_app.DataAccess;
using ert_beer_app.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Handlers
{
    public class BeersHandler
    {
        private BeerDbContext _dbContext;

        public BeersHandler(BeerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task SetFavoriteBeers(FavoriteBeerRequest request)
        {
            _dbContext.FavoriteBeers.AddRange(request.BeerIds.Select(beerId => new FavoriteBeerModel { EMail = request.EMail, BeerId = beerId }));
            await _dbContext.SaveChangesAsync();
        }

        public async Task<int[]> GetFavoriteBeers(string email)
        {
            return await _dbContext.FavoriteBeers.Where(x => x.EMail == email).Select(x => x.BeerId).ToArrayAsync();
        }
    }
}
