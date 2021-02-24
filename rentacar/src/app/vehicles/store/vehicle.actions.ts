import { Action } from "@ngrx/store";

export const GET_VEHICLE_START = 'GET_VEHICLE_START';
export const GET_VEHICLE_SUCCESS = 'GET_VEHICLE_SUCCESS';

export class GetVehicleStart implements Action {
    readonly type = GET_VEHICLE_START;
}

export class GetVehicleSuccess implements Action {
    readonly type = GET_VEHICLE_SUCCESS;

    constructor(public payload:any[]){}
}

export type VehicleTypes = GetVehicleStart | GetVehicleSuccess;
