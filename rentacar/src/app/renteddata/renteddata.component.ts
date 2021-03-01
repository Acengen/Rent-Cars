import { ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import * as fromVehicleActions from '../vehicles/store/vehicle.actions';
import { RentalEvent } from '../rentalEvent/RentalEvent';
import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-renteddata',
  templateUrl: './renteddata.component.html',
  styleUrls: ['./renteddata.component.scss'],
})
export class RenteddataComponent implements OnInit {
  rented:RentalEvent[];
  constructor(private store: Store<fromApp.AppState>) {
   
  }

  ngOnInit() {
    this.store.dispatch(new fromVehicleActions.GetRentalStart());
    this.store
      .select('vehicleList')
      .pipe(map((data) => data.rental))
      .subscribe((res) => {
        this.rented = res
      });
  }

  deleteRental(id:number){
      this.store.dispatch(new fromVehicleActions.DeleteRentalStart(id));
  }
}
