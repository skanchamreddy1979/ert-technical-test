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
        string apiBaseUrl = string.Empty, PerPageCount = string.Empty, beerNameProperty = string.Empty;
        public BeerService(IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            this.clientFactory = clientFactory;
            this.configuration = configuration;
            apiBaseUrl = configuration["BeerApi:apiUrl"];
            PerPageCount = configuration["BeerApi:perPage"];
            beerNameProperty = configuration["BeerApi:beerName"];
        }
        public IEnumerable<BeerModel> GetAllBeers(string beerName = null, int pageNumber = 1)
        {
            apiBaseUrl = apiBaseUrl + "page=" + pageNumber + "&per_page=" + PerPageCount;

            if (!string.IsNullOrEmpty(beerName))
            {
                apiBaseUrl = apiBaseUrl + beerNameProperty + beerName;
            }
            return GetBeersFromAPI(apiBaseUrl);
        }

        public int GetLastPageIndex()
        {
            var LastPage = Convert.ToInt32(configuration["BeerApi:LastPageIndex"]);
            return LastPage;
        }
        public IEnumerable<BeerModel> GetBeerById(int id = 0)
        {
            apiBaseUrl = apiBaseUrl.Replace("?", "/" + id);
            return GetBeersFromAPI(apiBaseUrl);
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
