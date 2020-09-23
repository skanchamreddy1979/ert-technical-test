using DAL;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BLL
{
    public class BeerService : IBeerService
    {
        private readonly IBeerRepository _beerRepository;

        public BeerService(IBeerRepository beerRepository)
        {
            if (beerRepository == null)
            {
                throw new ArgumentNullException(nameof(beerRepository));
            }

            _beerRepository = beerRepository;
        }

        public async Task AddOrUpdate(ICollection<Beer> beers, string email)
        {
            if (beers == null)
            {
                throw new ArgumentNullException(nameof(beers));
            }

            if (string.IsNullOrWhiteSpace(email))
            {
                throw new ArgumentException(email);
            }

            await _beerRepository.AddOrUpdate(beers, email);
        }
    }
}
