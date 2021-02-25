import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customerItem',
  templateUrl: './customerItem.component.html',
  styleUrls: ['./customerItem.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer:Customer;
  constructor() { }

  ngOnInit() {
  }

}
