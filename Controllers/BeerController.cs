using System.Collections.Generic;
using System.Linq;
using ERT.BusinessServices.Interfaces;
using ERT.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{   
    public class BeerController : Controller
    {
        private IBeerService beerService  = null;
        public BeerController(IBeerService beerService)
        {
            this.beerService = beerService;
        }
        public ActionResult GetBeerDetails(BeerModel model)
        {
            BeerModel beerModel = new BeerModel();
            beerModel.Id = model.Id;
            beerModel.Name = model.Name;
            beerModel.TagLine = model.TagLine;
            beerModel.First_Brewed = model.First_Brewed;
            beerModel.Abv = model.Abv;
            beerModel.image_url = model.image_url;
            return View("BeerInfo", beerModel);
        }
        public ActionResult GetAllBeers(string searchBeersByName = null, int pageNumber = 1)
        {            
            if (pageNumber < 1) pageNumber = 1;
            IEnumerable<BeerModel> model = beerService.GetAllBeers(searchBeersByName, pageNumber);
            return View("Beer",PaginatedList<BeerModel>.CreateAsync(model.ToList(), pageNumber, model.Count()));
        }     

    }
}