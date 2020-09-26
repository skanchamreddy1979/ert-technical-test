using ert_beer_app.Interfaces;
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
        private HttpClient HttpClient { get; }
        private IConfiguration Configuration { get; }
        private string BaseUrl { get; }

        public BeerService(HttpClient httpClient, IConfiguration configuration)
        {
            HttpClient = httpClient;
            Configuration = configuration;
            BaseUrl = Configuration.GetValue<string>("BeerServiceBaseUrl");
            HttpClient.BaseAddress = new Uri(BaseUrl);
        }

        public async Task<List<Beer>> GetBeersAsync(GetBeersRequest beerRequest)
        {
            if (beerRequest is null)
            {
                throw new ArgumentNullException(nameof(beerRequest));
            }

            if (beerRequest.Page <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(beerRequest.Page), "Must be a positive number");
            }

            if (beerRequest.PerPage <= 0
                || beerRequest.PerPage > 80)
            {
                throw new ArgumentOutOfRangeException(nameof(beerRequest.PerPage), "Must be a number greater than 0 and less than 80");
            }

            var requestUrl = $"{BaseUrl}?page={beerRequest.Page}&per_page={beerRequest.PerPage}";

            if (string.IsNullOrEmpty(beerRequest.BeerName) == false)
            {
                requestUrl = $"{requestUrl}&beer_name={beerRequest.BeerName}";
            }

            try
            {
                var response = await HttpClient.GetAsync(requestUrl);
                var content = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<List<Beer>>(content);
                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Beer> GetBeerAsync(long id)
        {
            if (id <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(id), "Must be a positive number");
            }

            var requestUrl = $"{BaseUrl}/{id}";
            try
            {
                var response = await HttpClient.GetAsync(requestUrl);
                var content = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<List<Beer>>(content).FirstOrDefault();
                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}