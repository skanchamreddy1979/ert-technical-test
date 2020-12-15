using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{
    public class BrewDogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
