import { Action } from '@ngrx/store';
import { RentalEvent } from 'src/app/rentalEvent/RentalEvent';
import { Vehicle } from '../Vehicle';

export const GET_VEHICLE_START = 'GET_VEHICLE_START';
export const GET_VEHICLE_SUCCESS = 'GET_VEHICLE_SUCCESS';

export const CREATE_VEHICLE_START = 'CREATE_VEHICLE_START';
export const CREATE_VEHICLE_SUCCESS = 'CREATE_VEHICLE_SUCCESS';
export const CREATE_VEHICLE_FAIL = 'CREATE_VEHICLE_FAIL';

export const EDIT_VEHICLE_START = 'EDIT_VEHICLE_START';
export const EDIT_VEHICLE_SUCCESS = 'EDIT_VEHICLE_SUCCESS';

export const DELETE_VEHICLE_START = 'DELETE_VEHICLE_START';
export const DELETE_VEHICLE_SUCCESS = 'DELETE_VEHICLE_SUCCESS';

export const CREATE_RENTAL_START = '[Rental] Create rental start';
export const CREATE_RENTAL_SUCCESS = '[Rental] Create rental success';
export const CREATE_RENTAL_FAIL = '[Rental] Create rental fail';


export const GET_RENTAL_START = 'GET_RENTAL_START';
export const GET_RENTAL_SUCCESS = 'GET_RENTAL_SUCCESS';

export const DELETE_RENTAL_START = 'DELETE_RENTAL_START';
export const DELETE_RENTAL_SUCCESS = 'DELETE_RENTAL_SUCCESS';


export class GetVehicleStart implements Action {
  readonly type = GET_VEHICLE_START;
}

export class GetVehicleSuccess implements Action {
  readonly type = GET_VEHICLE_SUCCESS;

  constructor(public payload: Vehicle[]) {}
}

export class CreateVehicleStart implements Action {
  readonly type = CREATE_VEHICLE_START;

  constructor(public payload: Vehicle) {}
}

export class CreateVehicleSuccess implements Action {
  readonly type = CREATE_VEHICLE_SUCCESS;
  constructor(public payload: Vehicle) {}
}

//fail to create vehicle
export class CreateVehicleFail implements Action {
  readonly type = CREATE_VEHICLE_FAIL;
  constructor(public payload: string[]) {}
}

export class EditVehicleStart implements Action {
  readonly type = EDIT_VEHICLE_START;

  constructor(public payload: { id: number; vehicle: Vehicle }) {}
}
export class EditVehicleSuccess implements Action {
  readonly type = EDIT_VEHICLE_SUCCESS;

  constructor(public payload: Vehicle) {}
}

export class DeleteVehicleStart implements Action {
  readonly type = DELETE_VEHICLE_START;
  constructor(public payload: number) {}
}
export class DeleteVehicleSuccess implements Action {
  readonly type = DELETE_VEHICLE_SUCCESS;
}

export class CreateRentalStart implements Action {
  readonly type = CREATE_RENTAL_START;

  constructor(
    public payload: { customerName:string; vehicleName: string; rentalEvent: RentalEvent }
  ) {}
}

export class CreateRentalSuccess implements Action {
  readonly type = CREATE_RENTAL_SUCCESS;

  constructor(public payload:{rent:any,successMsg:string}) {}
}
export class CreateRentalFail implements Action {
  readonly type = CREATE_RENTAL_FAIL;
  constructor(public payload:string) {}
}

export class GetRentalStart implements Action {
  readonly type = GET_RENTAL_START;
}
export class GetRentalSuccess implements Action {
  readonly type = GET_RENTAL_SUCCESS;

  constructor(public payload:RentalEvent[]){}
}
export class DeleteRentalStart implements Action {
  readonly type = DELETE_RENTAL_START;
  constructor(public payload:number) {}
}
export class DeleteRentalSuccess implements Action {
  readonly type = DELETE_RENTAL_SUCCESS;

}

export type VehicleTypes =
  | GetVehicleStart
  | GetVehicleSuccess
  | CreateVehicleStart
  | CreateVehicleSuccess
  | EditVehicleStart
  | EditVehicleSuccess
  | DeleteVehicleStart
  | DeleteVehicleSuccess
  | CreateVehicleFail
  | CreateRentalStart
  | CreateRentalSuccess | GetRentalStart | GetRentalSuccess | CreateRentalFail | DeleteRentalStart | DeleteRentalSuccess;
