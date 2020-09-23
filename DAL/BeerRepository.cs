using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class BeerRepository : IBeerRepository, IDisposable
    {
        private bool _disposed;
        private readonly Context _context;

        public BeerRepository()
        {
            _context = new Context();
            _context.Database.EnsureCreated();
        }

        public async Task AddOrUpdate(ICollection<Beer> beers, string userId)
        {
            var user = new User {  Email = userId, FavouriteBeers = beers };

            await UpdateBeersTable(beers);
            await UpdateUser(user);

            await _context.SaveChangesAsync();
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
            bool exists = GetUserByEmail(user.Email) != null;

            if (exists)
            {
                _context.Users.Update(user);
                return;
            }

            await _context.Users.AddAsync(user);
        }

        private User GetUserByEmail(string email) 
            => _context.Users.SingleOrDefault(x => x.Email == email); 
    }
}
