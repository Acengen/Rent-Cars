using AutoMapper;
using rentacarAPI.dtos;
using rentacarAPI.Models;

namespace rentacarAPI.helpers
{
    public class automapper:Profile
    {
        public automapper()
        {
            CreateMap<Customer,CustomerToUpdateDto>();
            CreateMap<CustomerToUpdateDto,Customer>();
            
            CreateMap<Vehicle,VehicleToUpdateDto>();
            CreateMap<VehicleToUpdateDto,Vehicle>();

            CreateMap<Rentalevent,rentalEventDto>();
            CreateMap<rentalEventDto,Rentalevent>();
        }
    }
}