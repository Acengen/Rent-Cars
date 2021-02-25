import { Action } from "@ngrx/store";
import { Customer } from "../Customer";

export const GET_CUSTOMERS_START = "GET_CUSTOMERS_START";
export const GET_CUSTOMERS_SUCCESS = "GET_CUSTOMERS_SUCCESS";

export const CREATE_CUSTOMERS_START = "CREATE_CUSTOMERS_START";
export const CREATE_CUSTOMERS_SUCCESS = "CREATE_CUSTOMERS_SUCCESS";

export const EDIT_CUSTOMERS_START = "EDIT_CUSTOMERS_START";
export const EDIT_CUSTOMERS_SUCCESS = "EDIT_CUSTOMERS_SUCCESS";

export const DELETE_CUSTOMERS_START = "DELETE_CUSTOMERS_START";
export const DELETE_CUSTOMERS_SUCCESS = "DELETE_CUSTOMERS_SUCCESS";

export class GetCustomerStart implements Action {
    readonly type = GET_CUSTOMERS_START;
}

export class GetCustomerSuccess implements Action {
    readonly type = GET_CUSTOMERS_SUCCESS;

    constructor(public payload:Customer[]) {}
}

export class CreateCustomerStart implements Action {
    readonly type = CREATE_CUSTOMERS_START;
    constructor(public payload:Customer){}
}
export class CreateCustomerSuccess implements Action {
    readonly type = CREATE_CUSTOMERS_SUCCESS;
    constructor(public payload:Customer){}
}
export type CustomersTypes = GetCustomerStart | GetCustomerSuccess | CreateCustomerStart | CreateCustomerSuccess;