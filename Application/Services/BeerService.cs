using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using Application.Interfaces;
using Application.Utilities;
using Application.ViewModel;
using Domain;

namespace Application.Services
{
    public class BeerService : IBeerService
    {
        private readonly IBeerDBContext _beerDbContext;
        public BeerService(IBeerDBContext beerDbContext)
        {
            _beerDbContext = beerDbContext;
        }

        public IEnumerable<BeerViewModel> GetAll()
        {
            using (var httpClient = new HttpClient())
            {
                var url = "https://api.punkapi.com/v2/beers";
                var task = httpClient.GetFromJsonAsync<IEnumerable<Beer>>(url);
                task.Wait();
                var resultResponse = task.Result;

                return resultResponse.Select(i => new BeerViewModel
                {
                    Id = i.Id,
                    AbvData = i.AbvData,
                    FirstBrewed = i.FirstBrewed,
                    Name = i.Name,
                    Tagline = i.Tagline
                });
            }
        }

        public Beer Get(int id)
        {
            using (var httpClient = new HttpClient())
            {
                var url = "https://api.punkapi.com/v2/beers/" + id;
                var task = httpClient.GetFromJsonAsync<IEnumerable<Beer>>(url);
                task.Wait();
                var resultResponse = task.Result.First();

                return resultResponse;
            }
        }

        public void AddFavorites(IEnumerable<int> ids, string email)
        {
            if (!RegexUtilities.IsValidEmail(email))
            {
                throw new Exception("email is not valid");
            }

            var values = ids.ToList();
            if (values.Count() > 5 || !values.Any())
            {
                throw new Exception("favorites count not valid");
            }

            if (_beerDbContext.Favorites.Any(i => i.Email == email))
            {
                _beerDbContext.Favorites.First(i => i.Email == email).Beers = string.Join(" ", values);
                _beerDbContext.SaveChangesAsync();
            }

            _beerDbContext.Favorites.Add(new Favourites
            {
                Email = email,
                Beers = string.Join(" ", values)
            });

            _beerDbContext.SaveChangesAsync();
        }

        public IEnumerable<BeerViewModel> GetFavorites(string email)
        {
            if (!RegexUtilities.IsValidEmail(email))
            {
                throw new Exception("email is not valid");
            }

            var result = new List<BeerViewModel>();
            var userFavorites =  _beerDbContext.Favorites.First(i => i.Email == email);
            var beers = userFavorites.Beers.Split(' ');

            var allBeers = GetAll().ToList();

            foreach (var id in beers)
            {
                var beer = allBeers.First(i => i.Id == int.Parse(id));
                result.Add(new BeerViewModel
                {
                    Id = beer.Id,
                    AbvData = beer.AbvData,
                    FirstBrewed = beer.FirstBrewed,
                    Name = beer.Name,
                    Tagline = beer.Tagline
                });
            }

            return result;
        }
    }
}
