import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import {catchError, map, switchMap} from 'rxjs/operators';
import { RentalEvent } from "src/app/rentalEvent/RentalEvent";
import * as fromVehicleActions from './vehicle.actions';
import * as fromApp from '../../app.reducer';

@Injectable()
export class VehicleEffects {
   
    getVehicles$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromVehicleActions.GET_VEHICLE_START),
            switchMap(() => {
                return this.http.get<any[]>("http://localhost:5000/user").pipe(map(res => {
                    return new fromVehicleActions.GetVehicleSuccess(res)
                }))
            })
        )
    })

    createVehicle = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromVehicleActions.CREATE_VEHICLE_START),
            switchMap((resData:fromVehicleActions.CreateVehicleStart) => {
                return this.http.post<any>("http://localhost:5000/user/createVehicle",resData.payload).pipe(
                    map(res => {
                        return new fromVehicleActions.CreateVehicleSuccess(res)
                    }),
                    catchError(error => {
                        return of( new fromVehicleActions.CreateVehicleFail(error.error.errors))
                    })
                )
            })
        )
    })

    editVehicle = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromVehicleActions.EDIT_VEHICLE_START),
            switchMap((resData:fromVehicleActions.EditVehicleStart)=> {
                return this.http.put<any>("http://localhost:5000/user/vehicle/edit/" + resData.payload.id, resData.payload.vehicle).pipe(
                    map(res => {
                        return new fromVehicleActions.EditVehicleSuccess(res)
                    })
                )
            })
        )
    })

    createRental = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromVehicleActions.CREATE_RENTAL_START),
            switchMap((resData:fromVehicleActions.CreateRentalStart)=> {
                return this.http.post<any>("http://localhost:5000/user/rentalEvent/" + resData.payload.customerName + "/" + resData.payload.vehicleName,resData.payload.rentalEvent).pipe(
                    map(res => {
                        return new fromVehicleActions.CreateRentalSuccess({rent:res,successMsg:"Success"})
                    }),        
                    catchError(error => {
                            return of(new fromVehicleActions.CreateRentalFail(error.error));
                    })
                )

            })
        )
    });
    
    


    getRental = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromVehicleActions.GET_RENTAL_START),
            switchMap(() => {
                return this.http.get<RentalEvent[]>("http://localhost:5000/user/rentalEvent").pipe(
                    map(res => {
                        return new fromVehicleActions.GetRentalSuccess(res)
                    })
                )
            })
        )
    })

    deleteRental = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromVehicleActions.DELETE_RENTAL_START),
            switchMap((resData:fromVehicleActions.DeleteRentalStart)=> {
                return this.http.delete<RentalEvent>("http://localhost:5000/user/rentalEvent/" + resData.payload).pipe(
                    map(() => {
                        return new fromVehicleActions.DeleteRentalSuccess()
                    })
                )
            })
        )
    })

    deleteVehicle = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromVehicleActions.DELETE_VEHICLE_START),
            switchMap((resData:fromVehicleActions.DeleteVehicleStart) => {
                return this.http.delete<any>("http://localhost:5000/user/vehicle/" + resData.payload).pipe(
                    map(res => {
                        return new fromVehicleActions.DeleteVehicleSuccess()
                    })
                )
            })
        )
    })

    constructor(private actions$:Actions,private http:HttpClient,private store:Store<fromApp.AppState>){}
   
    
}
