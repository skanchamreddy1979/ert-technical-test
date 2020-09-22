using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
    public interface IBrewDogRepository
    {
        IEnumerable<BrewDog> GetBrewDogs();
        IEnumerable<BrewDog> SerachBrewDog(String brewDogName);
    }
}
