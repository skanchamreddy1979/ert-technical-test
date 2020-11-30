using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ERT.ApplicationServices;
using ERT.ApplicationServices.ServiceContracts;
using ERT.Domain;
using ERT.Domain.Repositories;
using ERT.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using IBrewDogBeerService = ERT.ApplicationServices.ServiceContracts.IBrewDogBeerService;
using IBrewDogRepository = ERT.Domain.Repositories.IBrewDogRepository;

namespace ERT.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddControllers();
            services.AddControllers(options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true);
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddDbContext<ErtDomainContext>(item => item.UseSqlServer(Configuration.GetConnectionString("ErtHmnyConnection")));
            services.AddScoped<IBrewDogBeerService, BrewDogServices>();
            services.AddScoped<IBrewDogRepository, BrewDogRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute("default", "api/{controller}/{action}/{id?}");
            });
        }
    }
}
