import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import * as fromCustomerActions from '../store/customer.actions';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customerEdit',
  templateUrl: './customerEdit.component.html',
  styleUrls: ['./customerEdit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customerId:number;
  customer:Customer;
  constructor(private store:Store<fromApp.AppState>,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.router.params.subscribe(
      (param:Params) => {
        this.customerId = +param['id'];
        this.store.select('customerList').pipe(map(resdata => {
          return resdata.customer.find((v,index) => {
            return v.customerId === this.customerId
          })
        })).subscribe(res => {
          if(!res){
            this.route.navigate(['/customers'])
          }
          this.customer = JSON.parse(JSON.stringify(res));
        })
      }
    )
  }

  editCustomer(f:NgForm){
    this.store.dispatch(new fromCustomerActions.EditCustomerStart({id:this.customerId,customer:f.value}))
  } 

}
