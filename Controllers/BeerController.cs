using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{   
    public class BeerController : Controller
    {
        private IBeerRepository _repositry = null;        
        public BeerController(IBeerRepository repository)
        {
            this._repositry = repository;
        }
        public IActionResult Details(BeerModel beerData)
        {
            BeerModel beerModel = new BeerModel();
            beerModel.Id = beerData.Id;
            beerModel.Name = beerData.Name;
            beerModel.TagLine = beerData.TagLine;
            beerModel.First_Brewed = beerData.First_Brewed;
            beerModel.Abv = beerData.Abv;
            beerModel.image_url = beerData.image_url;
            return View("BeerInfo", beerModel);
        }
        public IActionResult AddtoFavorites(IEnumerable<BeerModel> fields, string email)
        {            
            if (!string.IsNullOrEmpty(email))
            {
                var countChecked = 0;
                foreach (var item in fields)
                {
                    if (item.checkboxAnswer == true)
                    {
                        countChecked = countChecked + 1;
                        if (ModelState.IsValid)
                        {
                            _repositry.SaveBeer(item);
                        }
                    }
                }
            }
            return RedirectToAction("Beer", "Beer");
        }
        public async Task<ActionResult> Beer(string searchBeersByName = null, int pageNumber = 1)
        {
            if (pageNumber < 1) pageNumber = 1;
            IEnumerable<BeerModel> model = await _repositry.AllBeers(searchBeersByName, pageNumber);

            return View(PaginatedList<BeerModel>.CreateAsync(model.ToList(), pageNumber, model.Count()));
        }       

        public IActionResult SearchFavoriteBeersByEmail(string searchFavorites)
        {          
            if (!string.IsNullOrEmpty(searchFavorites))
            {
                var beers = _repositry.GetBeerByEmail(searchFavorites);
                return View("SearchBeer", beers);
            }
            else
            {
                return RedirectToAction("Beer", "Beer");
            }
        }

    }
}