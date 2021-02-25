import { CustomerEffects } from './customers/store/customer.effects';
import { CustomerItemComponent } from './customers/customerItem/customerItem.component';
import { CustomerEditComponent } from './customers/customerEdit/customerEdit.component';
import { VehicleEditComponent } from './vehicles/vehicleEdit/vehicleEdit.component';
import { VehicleitemComponent } from './vehicles/vehicleitem/vehicleitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RentalEventComponent } from './rentalEvent/rentalEvent.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { appreducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from './vehicles/store/vehicle.effects';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:"customers",component:CustomersComponent,children:[
    {path:"edit/:id",component:CustomerEditComponent}
  ]},
  {path:"", component:VehiclesComponent, children:[
    {path:":id", component:VehicleEditComponent}
  ]},
  
]

@NgModule({
  declarations: [			
    AppComponent,
      CustomersComponent,
      VehiclesComponent,
      RentalEventComponent,
      VehicleitemComponent,
      VehicleEditComponent,
      CustomerEditComponent,
      CustomerItemComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot(appreducers),
    EffectsModule.forRoot([VehicleEffects,CustomerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
