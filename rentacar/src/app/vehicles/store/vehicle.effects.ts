import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromVehicleActions from './vehicle.actions';

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

    constructor(private actions$:Actions,private http:HttpClient){}
   
    
}
