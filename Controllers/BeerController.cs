using System;
using ert_beer_app.Models;
using ert_beer_app.Services;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{
    //[Route("api/beer")]
    //[ApiController]
    public class BeerController : Controller
    {

        private readonly IBeerService beerService;

        public BeerController(IBeerService beerService)
        {
            this.beerService = beerService;
        }       
        public ActionResult Beer()
        {
            return View();
        }       

        [HttpPost]
        public IActionResult Save(BeerModel beer)
        {
            if (ModelState.IsValid)
            {
                beerService.SaveBeer(beer);
            }
            return RedirectToAction("Beer", "Beer");
        }
    }
}