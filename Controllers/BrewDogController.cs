using ert_beer_app.Models;
using Newtonsoft.Json;

using Newtonsoft.Json.Linq;

using System;

using System.Collections.Generic;

using System.Data;

using System.Linq;

using System.Net.Http;

using System.Threading.Tasks;

using System.Web;

using Microsoft.AspNetCore.Mvc;


using Microsoft.AspNetCore.Http;

namespace ert_beer_app.Controllers
{
    public class BrewDogController : Controller
    {
        IBrewDogRepository _brewdog;

        public BrewDogController(IBrewDogRepository brewdog)
        {
            _brewdog = brewdog;
        }
        // GET: BrewDog
        public ActionResult Index(String SearchString )
        {
            IEnumerable<BrewDog> list ;
            if (SearchString != null)
                list = _brewdog.SerachBrewDog(SearchString);
            else
                list = _brewdog.GetBrewDogs();

            return View( list);
        }

        // GET: BrewDog/Details/5
        public ActionResult Details(int id)
        {
            return View(_brewdog.GetBrewDogs().FirstOrDefault(x => x.ID == id));
        }


    }
}
