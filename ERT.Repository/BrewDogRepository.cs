using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using ERT.Domain;
using ERT.Domain;
using ERT.Domain.Repositories;

namespace ERT.Repository
{
    public class BrewDogRepository : IBrewDogRepository
    {
        private readonly ErtDomainContext _dbcontext;

        List<Beer> beerList = new List<Beer>()
        {
            new Beer(){Id = 1,Name = "Buzz", FirstBrewed = "09/2007",Abv = 4.5, Description = "desc1",ImageUrl = "https://images.punkapi.com/v2/keg.png",Tagline = "A Real Bitter Experience."},
            new Beer(){Id = 2,Name = "Trashy Blonde", FirstBrewed = "04/2008",Abv = 4.1, Description = "desc2",ImageUrl = "https://images.punkapi.com/v2/2.png",Tagline = "You Know You Should."},
            new Beer(){Id = 3,Name = "Berliner Weisse With Yuzu - B-Sides", FirstBrewed = "11/2015",Abv = 4.2, Description = "desc3",ImageUrl = "https://images.punkapi.com/v2/keg.png",Tagline = "Japanese Citrus Berliner Weisse."},
            new Beer(){Id = 4,Name = "Pilsen Lager", FirstBrewed = "09/2013",Abv = 6.3, Description = "desc1",ImageUrl = "https://images.punkapi.com/v2/4.png",Tagline = "Unleash the Yeast Series."},
            new Beer(){Id = 5,Name = "Avery Brown Dredge", FirstBrewed = "02/2011",Abv = 7.2, Description = "desc1",ImageUrl = "https://images.punkapi.com/v2/5.png",Tagline = "Bloggers' Imperial Pilsner."}
        };

        public BrewDogRepository(ErtDomainContext dbcontext)
        {
            this._dbcontext = dbcontext;
        }

        public async Task<Fevorite> AddFevorite(Fevorite fevorite)
        {
            _dbcontext.Fevorites.Add(fevorite);

            await _dbcontext.SaveChangesAsync();

            return fevorite;
        }

        public List<Beer> GetAllBeers()
        {
            return beerList;
        }

        public Beer GetBeerById(int beerId)
        {

            Beer beer = beerList.FirstOrDefault(x => x.Id.Equals(beerId));

            return beer;
        }

        public List<Beer> GetBeersSearchByName(string name)
        {
            if (!string.IsNullOrEmpty(name))
            {
                return beerList.Where(x => x.Name.ToLower().Contains(name)).ToList();
            }

            return null;
        }

        public Fevorite GetFevoriteById(string fevoriteId)
        {
            if (!string.IsNullOrEmpty(fevoriteId))
            {
                return _dbcontext.Fevorites.FirstOrDefault(x => x.FevoriteId.Equals(fevoriteId));
            }

            return null;
        }
    }
}
