import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../app.reducer';
import { Customer } from './Customer';
import * as fromCustomerActions from './store/customer.actions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers:Observable<Customer[]>;
  isActive:boolean;
  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromCustomerActions.GetCustomerStart());

    this.customers = this.store.select(fromApp.getCustomers);
  }

  addCustomer(f:NgForm){
    this.store.dispatch(new fromCustomerActions.CreateCustomerStart(f.value))
  }

}
