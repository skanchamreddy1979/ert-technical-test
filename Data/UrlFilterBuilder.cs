using System;
using System.Collections.Generic;
using System.Text;
using ert_beer_app.Business.Models;
using ert_beer_app.Data.Interfaces;

namespace ert_beer_app.Data
{
    public class UrlFilterBuilder : IUrlFilterBuilder
    {
        private const string BeerNameParam = "beer_name";
        public string AddFilterToUrl(string baseUrl, BeerSearchCriteria searchCriteria)
        {
            var url = baseUrl;
            if (!String.IsNullOrEmpty(searchCriteria.Name))
            {
                url = $"{baseUrl}?{BeerNameParam}={searchCriteria.Name}";
            }
            return url;
        }

        public string AddIdToUrl(string baseUrl, string id)
        {
            var url = baseUrl;
            if (!String.IsNullOrEmpty(id))
            {
                url = $"{baseUrl}/{id}";
            }
            return url;
        }
        public string AddIdsToUrl(string baseUrl, IEnumerable<int> ids)
        {
            var builder = new StringBuilder();
            foreach (var id in ids)
            {
                builder.Append($"{id}|");
            }
            var url = $"{baseUrl}?ids={builder.ToString()}";
            return url;
        }
    }
}
