using System.Reflection;

using Microsoft.EntityFrameworkCore;

namespace DAL
{
    internal class Context : DbContext
    {
        public DbSet<Beer> Beers { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=TestDatabase.db", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Map tables
            modelBuilder.Entity<Beer>().ToTable("Beer", "schema");
            modelBuilder.Entity<Beer>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Abv);
                entity.Property(e => e.BrewDate);
                entity.Property(e => e.Description);
                entity.Property(e => e.ImageUrl);
                entity.Property(e => e.Name);
                entity.Property(e => e.TagLine);
            });

            modelBuilder.Entity<User>().ToTable("User", "schema");
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Email);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
