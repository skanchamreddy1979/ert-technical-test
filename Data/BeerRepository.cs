using ert_beer_app.Model;
using ert_beer_app.ViewModel;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace ert_beer_app.Data
{
    public class BeerRepository:IBeerRepository
    {
        public const string baseUrl= "https://api.punkapi.com/v2/beers";
        public async Task<IEnumerable<BeerViewModel>> GetAll()
        {
            using (var httpClient = new HttpClient())
            {
                var resultResponse = await httpClient.GetFromJsonAsync<IEnumerable<Beer>>(baseUrl);

                return resultResponse.Select(i => new BeerViewModel
                {
                    Id = i.Id,
                    AbvData = i.AbvData,
                    FirstBrewed = i.FirstBrewed,
                    Name = i.Name,
                    Tagline = i.Tagline
                });
            }
        }

        public async Task<Beer> Get(int id)
        {
            using (var httpClient = new HttpClient())
            {
                var url = baseUrl + "/"+ id;
                var resultResponse = await httpClient.GetFromJsonAsync<IEnumerable<Beer>>(url);
                return resultResponse.FirstOrDefault();
            }
        }
    }
}
