import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../Vehicle';
import * as fromApp from '../../app.reducer';
import * as fromVehicleActions from '../store/vehicle.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-vehicleitem',
  templateUrl: './vehicleitem.component.html',
  styleUrls: ['./vehicleitem.component.scss']
})
export class VehicleitemComponent implements OnInit {
  @Input() vehicle:Vehicle;
  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  deleteCar(id:number) {
    if(confirm("Are you sure?"))
    this.store.dispatch(new fromVehicleActions.DeleteVehicleStart(id));
  }
}
