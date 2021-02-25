import { map } from 'rxjs/operators';
import * as fromAppReducer from './../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromVehicleActions from './store/vehicle.actions';
import { Vehicle } from './Vehicle';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles:Vehicle[] = [];
  vType = ["economy","luxury","estate","SUV","cargo"];
  defaultType = "economy";
  isActive:boolean = false;

  createVehicle:string;
  constructor(private store:Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromVehicleActions.GetVehicleStart());
    this.store.select('vehicleList').pipe(map(res => res)).subscribe(
      res => {
        if(res.vehicle !== null){
          this.vehicles = res.vehicle
        }
        if(res.createUserFail !== null){
           for(let key in res.createUserFail){
             console.log(res.createUserFail[key].toString())
           }
        }
      }
    )
  }

  addNewCar(f:NgForm){
    this.store.dispatch(new fromVehicleActions.CreateVehicleStart(f.value))
  }

}
