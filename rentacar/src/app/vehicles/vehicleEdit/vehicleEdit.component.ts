import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Vehicle } from '../Vehicle';
import * as fromApp from '../../app.reducer';
import * as fromVehicleActions from '../store/vehicle.actions';

@Component({
  selector: 'app-vehicleEdit',
  templateUrl: './vehicleEdit.component.html',
  styleUrls: ['./vehicleEdit.component.scss']
})
export class VehicleEditComponent implements OnInit {
  vType = ["economy","luxury","estate","SUV","cargo"];
  defaultType = "economy";
  vehicleId:number;
  vehicle:Vehicle;
  constructor(private route:ActivatedRoute,private router:Router,private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        this.vehicleId = +param['id'];
         this.store.select('vehicleList').pipe(map(resdata => {
           return resdata.vehicle.find((v,index) => {
             return v.vehicleId === this.vehicleId
           })
         })).subscribe(res => {
          if(!res){
            this.router.navigate(['/'])
          }
          this.vehicle = JSON.parse(JSON.stringify(res))
          
         })
      }
    )
  }

  editCar(f:NgForm){
      this.store.dispatch(new fromVehicleActions.EditVehicleStart({id:this.vehicleId,vehicle:f.value}));
  }

}
