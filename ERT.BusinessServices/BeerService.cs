using System;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Collections.Generic;
using ERT.BusinessServices.Interfaces;
using ERT.Entities;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using NPOI.SS.Formula.Functions;
using System.IO;

namespace ERT.BusinessServices
{
    public class BeerService : IBeerService
    {
        private readonly IConfiguration configuration;
        private readonly IHttpClientFactory clientFactory;
        public BeerService(IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            this.clientFactory = clientFactory;
            this.configuration = configuration;
        }
        public IEnumerable<BeerModel> GetAllBeers(string beerName = null, int pageNumber = 1)
        {
            List<BeerModel> beerList = new List<BeerModel>();

            var apiBaseUrl = configuration["BeerApi:apiUrl"];
            var PerPageCount = configuration["BeerApi:perPage"];
            var name = configuration["BeerApi:beerName"];            
            apiBaseUrl = configuration["BeerApi:apiUrl"] + "page=" + pageNumber + "&per_page=" + PerPageCount;           

            if (!string.IsNullOrEmpty(beerName))
            {
                apiBaseUrl = apiBaseUrl + name + beerName;
            }
            beerList = GetBeersFromAPI(apiBaseUrl);           

            return beerList;
        }  
        
        public int GetLastPageIndex()
        {           
            var LastPage = Convert.ToInt32(configuration["BeerApi:LastPageIndex"]);
            return LastPage;         
        }
        public IEnumerable<BeerModel> GetBeerById(int id = 0)
        {
            List<BeerModel> beerData = new List<BeerModel>();
            var apiBaseUrl = configuration["BeerApi:apiUrl"];
            apiBaseUrl = apiBaseUrl.Replace("?", "/" + id);

            beerData = GetBeersFromAPI(apiBaseUrl);          

            return beerData;
        }
        private List<BeerModel> GetBeersFromAPI(string url)
        {
            List<BeerModel> beerList = new List<BeerModel>();
            var client = clientFactory.CreateClient();

            using (HttpResponseMessage response = client.GetAsync(url).Result)
            {
                string apiresponse = response.Content.ReadAsStringAsync().Result;
                beerList = JsonConvert.DeserializeObject<List<BeerModel>>(apiresponse);
            }
            return beerList;
        }
    }
}
