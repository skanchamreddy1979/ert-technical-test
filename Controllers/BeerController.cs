using System.Collections.Generic;
using System.Linq;
using ERT.BusinessServices.Interfaces;
using ERT.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{
    public class BeerController : Controller
    {
        private IBeerService beerService = null;
        public BeerController(IBeerService beerService)
        {
            this.beerService = beerService;
        }
        public ActionResult GetBeerDetailsById(int id)
        {
            //
            IEnumerable<BeerModel> model = beerService.GetAllBeers(null, 0, id);
            return View("BeerInfo", model.FirstOrDefault(x => x.Id == id));
        }       
        public ActionResult GetAllBeers(string searchBeersByName = null, int pageNumber = 1)
        {           
            if (pageNumber < 1) pageNumber = 1;
            IEnumerable<BeerModel> model = null;
            model = beerService.GetAllBeers(searchBeersByName, pageNumber, 0);
            if (model.Count() > 0)
            {
                return View("Beer", PaginatedList<BeerModel>.CreateAsync(model.ToList(), pageNumber, model.Count()));
            }
            else
            {
                model = beerService.GetAllBeers(searchBeersByName, pageNumber - 1, 0);
            }
            return View("Beer", PaginatedList<BeerModel>.CreateAsync(model.ToList(), pageNumber - 1, model.Count()));
        }

    }
}