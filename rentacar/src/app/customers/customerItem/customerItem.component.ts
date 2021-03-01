import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import * as fromCustomerActions from '../store/customer.actions';
import * as fromApp from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customerItem',
  templateUrl: './customerItem.component.html',
  styleUrls: ['./customerItem.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer:Customer;
  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit() {
  }
  
  deleteCustomer(id:number) {
    if(confirm("Are you sure?")){
      this.store.dispatch(new fromCustomerActions.DeleteCustomerStart(id));
    }
  }
}
