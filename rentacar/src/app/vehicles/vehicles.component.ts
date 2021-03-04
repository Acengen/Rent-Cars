import { map } from 'rxjs/operators';
import * as fromAppReducer from './../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromVehicleActions from './store/vehicle.actions';
import * as fromCustomerActions from '../customers/store/customer.actions';
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
  isRented:boolean = false;
  isAdded:boolean = false;

  rentalError:string;
  constructor(private store:Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromVehicleActions.GetVehicleStart());
    this.store.dispatch(new fromCustomerActions.GetCustomerStart());
    this.store.select('vehicleList').pipe(map(res => res)).subscribe(
      res => {
          this.vehicles = res.vehicle
      }
    );
    
  }

  addNewCar(f:NgForm){
    this.isAdded = true;
    setTimeout(() => {
      this.isAdded = false;
    }, 1000);
    this.store.dispatch(new fromVehicleActions.CreateVehicleStart(f.value))
  }

}
