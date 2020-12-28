using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ERT.BusinessServices;
using ERT.BusinessServices.Interfaces;

namespace ert_beer_app
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
            services.Configure<RazorViewEngineOptions>(options =>
            {
                options.AreaViewLocationFormats.Clear();
                options.AreaViewLocationFormats.Add("/Views/{1}/{0}.cshtml");
                options.AreaViewLocationFormats.Add("/Views/{1}/{1}.cshtml");                
                options.AreaViewLocationFormats.Add("/Views/Shared/{0}.cshtml");
            });
            services.AddHttpClient();
            services.AddScoped<IBeerService, BeerService>();            
            services.AddControllersWithViews();
            services.AddSingleton(typeof(ILogger<>), typeof(Logger<>));
            var logFactory = LoggerFactory.Create(b => b.AddConsole().AddDebug());
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
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();            

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Beer}/{action=GetAllBeers}/{id?}");
            });
        }
    }
}
