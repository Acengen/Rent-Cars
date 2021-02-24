using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using rentacarAPI.Models;

namespace rentacarAPI.repos
{
    public class VehicleRepo : IVehicle
    {
        private readonly rentcarsContext _context;
        public VehicleRepo(rentcarsContext context)
        {
            _context = context;

        }

        public async Task<Customer> GetCustomer(int id)
        {
            return await _context.Customers.FirstOrDefaultAsync(c => c.CustomerId == id);
        }

        public async Task<IEnumerable<Customer>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }

        public async Task<Vehicle> GetVehicle(int id)
        {
            return await _context.Vehicles.FirstOrDefaultAsync(v => v.VehicleId == id);
        }

        public async Task<IEnumerable<Vehicle>> GetVehicles()
        {
            return await _context.Vehicles.ToListAsync();
        }
    }
}