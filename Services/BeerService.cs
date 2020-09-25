using ert_beer_app.Interfaces;
using ert_beer_app.Mappers;
using ert_beer_app.Models;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ert_beer_app.Services
{
    public class BeerService : IBeerService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _config;


        public BeerService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }

        private string GetUrl()
        {
            return _config.GetSection("BeerUrl").Value;
        }

        private string AddPagingToUrl(string url, int page, int take)
        {
            return url + $"?page={page}&per_page={take}";
        }

        private string AddBeerNameToUrl(string url, string beerName)
        {
            if (!String.IsNullOrEmpty(beerName))
            {
                return url + $"&beer_name={beerName}";
            }
            else
            {
                return url;
            }
        }

        private string AddBeerIdToUrl(string url, string id)
        {
            return url + $"/{id}";
        }

        private async Task<string> GetResponse(string url)
        {
            var uri = new System.Uri(url);

            var response = _httpClient.GetAsync(uri).Result;

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }



        public List<Beer> GetBeers(BeerByName beerByName)
        {

            var url = GetUrl();

            url = AddBeerNameToUrl(url, beerByName.beerName);

            var urlWithPage = AddPagingToUrl(url, beerByName.page, beerByName.take);

            var response = GetResponse(urlWithPage);

            var result = BeerModelMapper.ConvertResonseToBeer(response.Result);

            return result;
        }

        public BeerDetail GetBeerById(string id)
        {
            var url = GetUrl();

            url = AddBeerIdToUrl(url, id);

            var response = GetResponse(url);

            var result = BeerModelMapper.ConvertResonseToBeerDetail(response.Result);

            return result;
        }

        public void SaveBeersByEmail(SaveBeer saveBeer)
        {
            throw new NotImplementedException();
        }

        public List<Beer> GetBeersByEmail(string email)
        {
            throw new NotImplementedException();
        }
    }
}
