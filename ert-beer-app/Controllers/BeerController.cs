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
            IEnumerable<BeerModel> model = beerService.GetBeerById(id);
            return View("BeerInfo", model.FirstOrDefault());
        }
        public ActionResult GetAllBeers(string searchBeersByName = null,int pageNumber = 1)
        {           
            IEnumerable<BeerModel> model = null; 
            model = beerService.GetAllBeers(searchBeersByName, pageNumber );
            int lastPageIndex = beerService.GetLastPageIndex();
            return View("Beer", PaginatedList<BeerModel>.CreateAsync(model.ToList(), pageNumber, lastPageIndex));
        }

    }
}