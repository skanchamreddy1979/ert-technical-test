using System.Collections.Generic;
using System.Threading.Tasks;

namespace ert_beer_app.DataAccess.Interfaces
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAll(string email);

        Task Save(string email, IEnumerable<T> items);
    }
}
