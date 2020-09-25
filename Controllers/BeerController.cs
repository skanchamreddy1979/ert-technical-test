using ert_beer_app.Models;

using Microsoft.AspNetCore.Mvc;

using Nancy.Json;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;

namespace ert_beer_app.Controllers
{
    [Route("api/beer")]
    [ApiController]
    public class BeerController : Controller
    {
        ApplicationContext db;

        public BeerController(ApplicationContext context)
        {
            var listOfBeersProducts = PopulateCollection();

            db = context;
            if (!db.Beers.Any())
            {
                if (listOfBeersProducts.Any())
                {
                    foreach (Beer b in listOfBeersProducts)
                    {
                        db.Beers.Add(
                            new Beer
                            {
                                Id = b.Id,
                                Name = b.Name,
                                TagLine = b.TagLine,
                                Abv = b.Abv,
                                ImgUrl = b.ImgUrl,
                                Description = b.Description,
                            });
                    }
                    db.SaveChanges();
                }
            }
        }

        public IEnumerable<Beer> Get()
        {
            return db.Beers.ToList();
        }

        private List<Beer> PopulateCollection() {

            string urlData = String.Empty;
            WebClient client = new WebClient();

            var json = new WebClient().DownloadString("http://api.punkapi.com/v2/beers/");
            var serializer = new JavaScriptSerializer();
            List<Beer> beersList = serializer.Deserialize<List<Beer>>(json);

            return beersList;
        }
    }
}