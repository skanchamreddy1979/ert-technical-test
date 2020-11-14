using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ert_beer_app.Model;
using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BrewDogContext _context;

        public UsersController(BrewDogContext context)
        {
            _context = context;
        }

        // POST: api/Users/signup
        [Route("signup")]
        [HttpPost]
        public async Task<ActionResult<User>> SignUp(User user)
        {
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            {
                return BadRequest();
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("SignUp", new { id = user.UserId }, user);
        }

        // POST: api/Users/signin
        [Route("signin")]
        [HttpPost]
        public async Task<ActionResult<User>> SignIn([FromBody] string email)
        {
            var user = await _context.Users
                .Include(u => u.Favourites)
                .FirstOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/Users/[id]/favourites
        [Route("{id}/favourites")]
        [HttpPost]
        public async Task<ActionResult<Favourite>> AddFavourite([FromRoute] int id, Favourite favourite)
        {
            var user = await _context.Users
                .Include(u => u.Favourites)
                .FirstOrDefaultAsync(u => u.UserId == id);

            if (user == null)
            {
                return NotFound();
            }

            var createdFavourite = user.Favourites.FirstOrDefault(f => f.ItemId == favourite.ItemId);

            if (createdFavourite == null)
            {
                user.Favourites.Add(favourite);
                await _context.SaveChangesAsync();
                createdFavourite = favourite;
            }

            return CreatedAtAction("AddFavourite", new { id = favourite.FavouriteId }, createdFavourite);
        }

        // POST: api/Users/[userId]/favourites/[favouriteItemId]
        [Route("{userId}/favourites/{favouriteItemId}")]
        [HttpDelete]
        public async Task<ActionResult<Favourite>> DeleteFavourite([FromRoute] int userId, [FromRoute] int favouriteItemId)
        {
            var user = await _context.Users
                .Include(u => u.Favourites)
                .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
            {
                return NotFound();
            }

            var favourite = user.Favourites.FirstOrDefault(f => f.ItemId == favouriteItemId);

            if (favourite == null)
            {
                return NotFound();
            }

            _context.Favourites.Remove(favourite);
            await _context.SaveChangesAsync();

            return favourite;
        }
    }
}
