﻿using System;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Collections.Generic;
using ERT.BusinessServices.Interfaces;
using ERT.Entities;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

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
        public IEnumerable<BeerModel> GetAllBeers(string beerName = null, int pageNumber = 1, int id=0)
        {
            List<BeerModel> beerList = new List<BeerModel>();
            var apiBaseUrl = configuration["BeerApi:apiUrl"];
            if (id > 0)
            {
                apiBaseUrl = apiBaseUrl.Replace("?", "/" + id);               
            }
            else
            {
                var PerPageCount = configuration["BeerApi:perPage"];
                var name = configuration["BeerApi:beerName"];
                apiBaseUrl = configuration["BeerApi:apiUrl"] + "page=" + pageNumber + "&per_page=" + PerPageCount;

                if (!string.IsNullOrEmpty(beerName))
                {
                    apiBaseUrl = apiBaseUrl + name + beerName;
                }
            } 

            var client = clientFactory.CreateClient();

            using (HttpResponseMessage response = client.GetAsync(apiBaseUrl).Result)
            {
                string apiresponse = response.Content.ReadAsStringAsync().Result;
                beerList = JsonConvert.DeserializeObject<List<BeerModel>>(apiresponse);
            }

            return beerList;
        }


    }
}
