import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {map, switchMap} from 'rxjs/operators';
import { Customer } from "../Customer";
import * as fromActions from './customer.actions';


@Injectable()
export class CustomerEffects {
    getCustomers$ = createEffect(() => {
        return this.action$.pipe(
            ofType(fromActions.GET_CUSTOMERS_START),
            switchMap(()=> {
                return this.http.get<Customer[]>("http://localhost:5000/user/customers").pipe(
                    map(res => {
                        return new fromActions.GetCustomerSuccess(res)
                    })
                )
            })
        )
    })

    createCustomer$ = createEffect(() => {
        return this.action$.pipe(
            ofType(fromActions.CREATE_CUSTOMERS_START),
            switchMap((resData:fromActions.CreateCustomerStart) => {
                return this.http.post<Customer>("http://localhost:5000/user/createCustomer",resData.payload).pipe(
                    map(res => {
                        return new fromActions.CreateCustomerSuccess(res)
                    })
                )
            })
        )
    })

    editCustomer$ = createEffect(() => {
        return this.action$.pipe(
            ofType(fromActions.EDIT_CUSTOMERS_START),
            switchMap((resdata:fromActions.EditCustomerStart) => {
                return this.http.put<Customer>("http://localhost:5000/user/customer/edit/" + resdata.payload.id,resdata.payload.customer).pipe(
                    map(res => {
                        return new fromActions.EditCustomerSuccess(res)
                    })
                )
            })
        )
    })

    deleteCustomer$ = createEffect(() => {
        return this.action$.pipe(
            ofType(fromActions.DELETE_CUSTOMERS_START),
            switchMap((resdata:fromActions.DeleteCustomerStart) => {
                return this.http.delete<Customer>("http://localhost:5000/user/customer/" + resdata.payload).pipe(
                    map(res => {
                        return new fromActions.DeleteCustomerSuccess()
                    })
                )
            })
        )
    })

    constructor(private action$:Actions,private http:HttpClient) {}
}