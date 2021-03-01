/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenteddataComponent } from './renteddata.component';

describe('RenteddataComponent', () => {
  let component: RenteddataComponent;
  let fixture: ComponentFixture<RenteddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenteddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenteddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
