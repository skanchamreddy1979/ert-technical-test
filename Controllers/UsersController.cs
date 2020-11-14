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

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        // POST: api/Users/signin
        [Route("signin")]
        [HttpPost]
        public async Task<ActionResult<User>> GetUser([FromBody] string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
    }
}
