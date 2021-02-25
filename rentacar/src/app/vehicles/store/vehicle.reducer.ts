import { Vehicle } from '../Vehicle';
import * as fromActions from './vehicle.actions';

export interface VehicleState{
    vehicle:Vehicle[];
    createUserFail:string[]
}

const initialState:VehicleState = {
    vehicle: [],
    createUserFail:[]
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
                ...state
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
                vehicle:vehicle
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

        default:
            return state

    }
}