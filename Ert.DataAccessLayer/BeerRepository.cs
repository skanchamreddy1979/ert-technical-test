using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

namespace Ert.DataAccessLayer
{
    public class BeerRepository : IBeerRepository, IDisposable
    {
        private bool _disposed;
        private readonly Context _context;

        public BeerRepository()
        {
            _context = new Context();
        }

        public async Task AddOrUpdate(ICollection<Beer> beers, string userId)
        {
            var user = new User {  Email = userId, FavouriteBeers = beers };

            await UpdateBeersTable(beers);
            await UpdateUser(user);

            await _context.SaveChangesAsync();
        }

        public async Task<ICollection<Beer>> GetFavourites(string userId)
        {
            User user = await _context.Users.Include(x => x.FavouriteBeers).SingleOrDefaultAsync(x => x.Email == userId);

            return user?.FavouriteBeers ?? new List<Beer>();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }

                _disposed = true;
            }
        }

        private async Task UpdateBeersTable(ICollection<Beer> beers)
        {
            foreach (Beer beer in beers)
            {
                var exists = _context.Beers.AsNoTracking().Any(x => x.Id == beer.Id);

                if (exists)
                {
                    _context.Beers.Update(beer);
                    continue;
                }

                await _context.Beers.AddAsync(beer);
            }
        }

        private async Task UpdateUser(User user)
        {
            bool exists = _context.Users.Any(x => x.Email == user.Email);

            if (exists)
            {
                _context.Users.Update(user);
                return;
            }

            await _context.Users.AddAsync(user);
        }
    }
}
