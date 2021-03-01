import { RentalEvent } from 'src/app/rentalEvent/RentalEvent';
import { Vehicle } from '../Vehicle';
import * as fromActions from './vehicle.actions';

export interface VehicleState{
    vehicle:Vehicle[],
    rental:any[],
    createUserFail:string[],
    rentalSuccess:string,
    rentalError:string,
    loading:boolean
}

const initialState:VehicleState = {
    vehicle: [],
    rental:[],
    createUserFail:[],
    rentalSuccess:null,
    rentalError:null,
    loading:false
}

export function VehicleReducer(state=initialState,action:fromActions.VehicleTypes) {
    switch(action.type){
        case fromActions.GET_VEHICLE_START:
            return {
                ...state
            }
        case fromActions.GET_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicle:action.payload
            }
        case fromActions.CREATE_VEHICLE_START:
            return {
                ...state,
            }
        case fromActions.CREATE_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicle:[...state.vehicle,action.payload],
                createUserFail:[]
            }
        case fromActions.CREATE_VEHICLE_FAIL:
            return {
                ...state,
                createUserFail:action.payload
            }
        case fromActions.EDIT_VEHICLE_START:
            return {
                ...state
            }
        
        case fromActions.EDIT_VEHICLE_SUCCESS:
            let index = state.vehicle.findIndex(i => i.vehicleId === action.payload.vehicleId);
            
            let vehicle = [...state.vehicle];

            const vehicleUpdate = {
                ...action.payload
            }
            
            vehicle[index] = vehicleUpdate;


            return {
                ...state,
                vehicle:vehicle,
            }

        case fromActions.DELETE_VEHICLE_START:
            return {
                ...state,
                vehicle:state.vehicle.filter((v,index) => {
                    return v.vehicleId !== action.payload
                })
            }
        case fromActions.DELETE_VEHICLE_SUCCESS:
            return {
                ...state
            }

        case fromActions.CREATE_RENTAL_START:
            return {
                ...state,
                rentalError:null,
                loading:true,
                rentalSuccess:null
            }
        case fromActions.CREATE_RENTAL_SUCCESS:
            
            let id = state.vehicle.findIndex(v => v.vehicleId === action.payload.rent.vehiclerepo.vehicleId);

            let v = [...state.vehicle];

            let vupdate = {
                ...action.payload.rent.vehiclerepo
            };

            v[id] = vupdate;

            return {
                ...state,
                rentalSuccess:action.payload.successMsg,
                rentalError:null,
                rental:[...state.rental,action.payload],
                vehicle:v,
                loading:false,
                
            }
        case fromActions.CREATE_RENTAL_FAIL:
            return {
                ...state,
                loading:false,
                rentalError:action.payload,
                rentalSuccess:null,
                rental:[]
            }
        case fromActions.GET_RENTAL_START:
            return {
                ...state
            }
        case fromActions.GET_RENTAL_SUCCESS:
            return {
                ...state,
                rental:action.payload
            }
        case fromActions.DELETE_RENTAL_START:
            return {
                ...state,
                rental:state.rental.filter(v => {
                    return v.rentalId !== action.payload
                })
            }
        case fromActions.DELETE_RENTAL_SUCCESS:
            return {
                ...state
            }
        default:
            return state

    }
}

export const getVehicles = (state:VehicleState) => state.vehicle;
export const getloading = (state:VehicleState) => state.loading;
export const getError = (state:VehicleState) => state.rentalError;