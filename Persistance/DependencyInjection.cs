using Application;
using Application.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<BeerDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("BeerDatabase")));

            services.AddScoped<IBeerDBContext>(provider => provider.GetService<BeerDbContext>());

            return services;
        }
    }
}
