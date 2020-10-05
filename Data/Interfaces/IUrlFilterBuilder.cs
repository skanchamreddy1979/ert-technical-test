using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Business.Models;

namespace ert_beer_app.Data.Interfaces
{
    public interface IUrlFilterBuilder
    {
        string AddFilterToUrl(string baseUrl, BeerSearchCriteria searchCriteria);
        string AddIdToUrl(string baseUrl,string id);
        string AddIdsToUrl(string baseUrl, IEnumerable<int> ids);

    }
}
