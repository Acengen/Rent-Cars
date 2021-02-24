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

const routes:Routes = [
  {path:"", component:VehiclesComponent},
  {path:"customers",component:CustomersComponent}
]

@NgModule({
  declarations: [			
    AppComponent,
      CustomersComponent,
      VehiclesComponent,
      RentalEventComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appreducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
