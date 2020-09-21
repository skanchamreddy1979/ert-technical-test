using ert_beer_app.Model;
using ert_beer_app.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ert_beer_app.Data
{
    public interface IBeerRepository
    {
        Task<IEnumerable<BeerViewModel>> GetAll();
        Task<Beer> Get(int id);
    }
}
