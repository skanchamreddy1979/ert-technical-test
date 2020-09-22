using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
    public class BrewDogRepository : IBrewDogRepository
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;
        public BrewDogRepository(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }
        public IEnumerable<BrewDog> GetBrewDogs()
        {
            List<BrewDog> lstBrewdogs = new List<BrewDog>();
            var httpClient =   _httpClientFactory.CreateClient();
            HttpResponseMessage response = httpClient.GetAsync(_configuration["BeerApiCalls:GetAll"]).Result;           
            if (response.IsSuccessStatusCode)
            {
                var dataObjects = response.Content.ReadAsStringAsync().Result;
                lstBrewdogs = JsonConvert.DeserializeObject<List<BrewDog>>(dataObjects);
            }
            return lstBrewdogs;
        }

        public IEnumerable<BrewDog> SerachBrewDog(string brewDogName)
        {
            if (brewDogName != null)
            {
                List<BrewDog> lstBrewdogs = new List<BrewDog>();
                var httpClient = _httpClientFactory.CreateClient();

                HttpResponseMessage response = httpClient.GetAsync( _configuration["BeerApiCalls:SearchByName"]+brewDogName).Result;

                if (response.IsSuccessStatusCode)
                {
                    var dataObjects = response.Content.ReadAsStringAsync().Result;
                    lstBrewdogs = JsonConvert.DeserializeObject<List<BrewDog>>(dataObjects);
                }
                return lstBrewdogs;
            }
            else
                return GetBrewDogs();
        }
    }
}
