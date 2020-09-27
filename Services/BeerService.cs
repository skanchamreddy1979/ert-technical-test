using ert_beer_app.Ifrastucture;
using ert_beer_app.Interfaces;
using ert_beer_app.Models;

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
        private readonly ApplicationContext _db;

        public BeerService(HttpClient httpClient, ApplicationContext context)
        {
            _httpClient = httpClient;
            _db = context;
        }

        public void PopulateProductsCollection()
        {
            var responce = GetResponse(AppConsts.BaseReerUrl).Result;
            var listOfBeersProducts = Mappers.BeerMapper.MapBeerResponceToList(responce);

            // add list of beer products to db
            if (!_db.Beers.Any())
            {
                if (listOfBeersProducts.Any())
                {
                    foreach (Beer b in listOfBeersProducts)
                    {
                        _db.Beers.Add(
                            new Beer
                            {
                                Id = b.Id,
                                Name = b.Name,
                                TagLine = b.TagLine,
                                Abv = b.Abv,
                                Image_Url = b.Image_Url,
                                Description = b.Description,
                            });
                    }
                    _db.SaveChanges();
                }
            }
        }

        public Beer GetBeerById(string id)
        {
            var url = BuildUrl(GetBaseUrl(), id);

            var response = GetResponse(url);

            var result = Mappers.BeerMapper.MapResponceToSingleProduct(response.Result);
            
            return result;
        }

        private static string GetBaseUrl()
        {
            return AppConsts.BaseReerUrl;
        }

        private string BuildUrl(string url, string id)
        {
            return url + $"/{id}";
        }


        private async Task<string> GetResponse(string url)
        {
            var uri = new Uri(url);

            var response = _httpClient.GetAsync(uri).Result;

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }

        public List<Beer> GetAllBeerProducts()
        {
            return _db.Beers.ToList();
        }
    }
}
