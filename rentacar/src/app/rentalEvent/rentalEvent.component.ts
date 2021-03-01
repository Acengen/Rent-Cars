import { ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import * as fromVehicleActions from '../vehicles/store/vehicle.actions';
import { Customer } from '../customers/Customer';
import { Vehicle } from '../vehicles/Vehicle';
import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-rentalEvent',
  templateUrl: './rentalEvent.component.html',
  styleUrls: ['./rentalEvent.component.scss']
})
export class RentalEventComponent implements OnInit,OnDestroy {
  customers:Customer[];
 @Input() vehicles:Vehicle[];
  defaultValue = "Z4"
  loading:boolean;
  rentalSuccessMSg:string = '';
  rentedError:string = '';

  constructor(private store:Store<fromApp.AppState>,private http:HttpClient,private actions$:Actions) {}

  ngOnInit() {
    console.log(this.rentalSuccessMSg)
    this.store.select('customerList').subscribe(
      res => this.customers = res.customer
    )

    this.store.select(fromApp.getMsgForRentalSuccess).subscribe(res => {
      this.loading = res
    });

    this.actions$.pipe(
      ofType('[Rental] Create rental fail')
    ).subscribe((action:any) => {
      console.log(action)
      this.rentedError = action.payload;
      setTimeout(() => {
        this.rentedError = ''
      }, 2000);
    })

    this.actions$.pipe(
      ofType('[Rental] Create rental success')
    ).subscribe((res:any) => {
     this.rentalSuccessMSg = res.payload.successMsg
     setTimeout(() => {
        this.rentalSuccessMSg = ''
     }, 2000);
    })
  }


  rentIt(f:NgForm){
    this.store.dispatch(new fromVehicleActions.CreateRentalStart({customerName:f.value.customerName,vehicleName:f.value.vehicleName,rentalEvent:f.value}));
    setTimeout(() => {
      f.reset()
    }, 700);
  }

  ngOnDestroy(){
     
  }
  
}
