using System.Collections.Generic;
using System.Threading.Tasks;

using ert_beer_app.Commands;
using ert_beer_app.Models;

namespace ert_beer_app.Services.Interfaces
{
    public interface IBeerService
    {
        Task<IEnumerable<Beer>> GetFavouriteBeersForUserAsync(string userEmail);

        Task SaveFavouriteBeersForUserAsync(SaveFavouriteBeersCommand command);
    }
}
