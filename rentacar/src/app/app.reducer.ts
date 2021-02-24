import { ActionReducerMap } from "@ngrx/store"
import * as fromVehicleReducer from "./vehicles/store/vehicle.reducer"

export interface AppState {
    vehicleList: fromVehicleReducer.VehicleState
}

export const appreducers:ActionReducerMap<AppState> = {
    vehicleList: fromVehicleReducer.VehicleReducer
}