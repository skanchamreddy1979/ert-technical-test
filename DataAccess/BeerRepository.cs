using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ert_beer_app.DataAccess.Interfaces;
using ert_beer_app.Models;

namespace ert_beer_app.DataAccess
{
    public class BeerRepository : IRepository<Beer>
    {
        public Task<IEnumerable<Beer>> GetAll(string email)
        {
            var mockResult = new List<Beer>
                             {
                                 new Beer
                                 {
                                     Id = 1, Name = "Mock beer", 
                                     Description = "Mock description", 
                                     Abv = 40, 
                                     ImgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teepublic.com%2Fsticker%2F5145599-two-beer-or-not-two-beer-t-shirt-funny-beer-lover-&psig=AOvVaw3Bmuest6QYDytjR0b9m_BQ&ust=1601126463941000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD4sY6zhOwCFQAAAAAdAAAAABAJ"
                                 }
                             };
            return Task.FromResult(mockResult.AsEnumerable());
        }

        public Task Save(string email, IEnumerable<Beer> beerList)
        {
            return Task.CompletedTask;
        }
    }
}
