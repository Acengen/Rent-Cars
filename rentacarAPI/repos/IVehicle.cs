using System.Collections.Generic;
using System.Threading.Tasks;
using rentacarAPI.Models;

namespace rentacarAPI.repos
{
    public interface IVehicle
    {
         Task<IEnumerable<Vehicle>> GetVehicles();
         Task<IEnumerable<Customer>> GetCustomers();

         Task<Customer> GetCustomer(int id);
         Task<Vehicle> GetVehicle(int id);
    }
}