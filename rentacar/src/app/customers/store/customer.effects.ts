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

    constructor(private action$:Actions,private http:HttpClient) {}
}