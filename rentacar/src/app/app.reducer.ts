import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromVehicleReducer from "./vehicles/store/vehicle.reducer";
import * as fromCustomerReducer from './customers/store/customer.reducer';

export interface AppState {
    vehicleList: fromVehicleReducer.VehicleState,
    customerList: fromCustomerReducer.CustomerState
}

export const appreducers:ActionReducerMap<AppState> = {
    vehicleList: fromVehicleReducer.VehicleReducer,
    customerList: fromCustomerReducer.CustomerReducer
}


export const customerState = createFeatureSelector<fromCustomerReducer.CustomerState>('customerList');
export const vehicleState = createFeatureSelector<fromVehicleReducer.VehicleState>('vehicleList');
export const getCustomers = createSelector(customerState,fromCustomerReducer.getCustomerState);
export const getVehicle = createSelector(vehicleState,fromVehicleReducer.getVehicles);
export const getMsgForRentalSuccess = createSelector(vehicleState,fromVehicleReducer.getloading);
export const getRentalError = createSelector(vehicleState,fromVehicleReducer.getError);
