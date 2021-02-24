import * as fromActions from './vehicle.actions';

export interface VehicleState{
    vehicle:any[];
}

const initialState:VehicleState = {
    vehicle: []
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
    }
}