using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using ert_beer_app.Data;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Models
{
    public class BeerRepository : IBeerRepository
    {
        private readonly IConfiguration _iconfiguration;        
        private readonly IHttpClientFactory _clientFactory;


        private readonly BeerDBContext _beerDBContext;
        private readonly ILogger<BeerRepository> _logger;
        public BeerRepository(IHttpClientFactory clientFactory, IConfiguration configuration, BeerDBContext beerContext, ILogger<BeerRepository> logger)
        {
            this._clientFactory = clientFactory;
            this._iconfiguration = configuration;
            this._logger = logger;
            this._beerDBContext = beerContext;
        }             
        public async Task<IEnumerable<BeerModel>> AllBeers(string beerName = null, int pageNumber = 1)
        {
            var apiBaseUrl = _iconfiguration.GetValue<string>("apiUrl");
            var PerPageCount = _iconfiguration.GetValue<string>("perPage");
            var name = _iconfiguration.GetValue<string>("beerName");
            apiBaseUrl = _iconfiguration.GetValue<string>("apiUrl") + "page=" + pageNumber + "&per_page=" + PerPageCount;
          
            if (!string.IsNullOrEmpty(beerName))
            {
                apiBaseUrl = apiBaseUrl + name + beerName;
            }
            var client = _clientFactory.CreateClient();
            List<BeerModel> beerList = new List<BeerModel>();            
            using (var response = await client.GetAsync(apiBaseUrl))
            {
                string apiresponse = await response.Content.ReadAsStringAsync();
                beerList = JsonConvert.DeserializeObject<List<BeerModel>>(apiresponse);
            }            
            return beerList;
        }
        public IList<BeerModel> GetBeerByEmail(string email)
        {
            return _beerDBContext.Beers.ToList().FindAll(s => s.Email == email);
        }

        public void SaveBeer(BeerModel beer)
        {            
                var beerFromDb = _beerDBContext.Beers.AsNoTracking().Any(x => x.Email == beer.Email);
                if (beerFromDb)
                {
                    beer.ModifiedDate = DateTime.UtcNow;
                    _beerDBContext.Beers.Update(beer);
                }
                else
                {
                    beer.Id = 0;
                }
            
            if (beer.Id == 0)
            {
                beer.CreatedDate = beer.ModifiedDate = DateTime.UtcNow;
                _beerDBContext.Beers.Add(beer);
            }
            _beerDBContext.SaveChanges();
        }

    }
}

