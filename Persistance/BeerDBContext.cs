using Application;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;

namespace Persistance
{
    public class BeerDbContext : DbContext, IBeerDBContext
    {
        public BeerDbContext(DbContextOptions<BeerDbContext> options)
            : base(options)
        {
        }

        public DbSet<Favourites> Favorites { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(BeerDbContext).Assembly);
        }

        public Task<int> SaveChangesAsync()
        {
            CancellationToken cancellationToken = new CancellationToken();
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
