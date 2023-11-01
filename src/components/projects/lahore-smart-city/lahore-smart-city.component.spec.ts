/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LahoreSmartCityComponent } from './lahore-smart-city.component';

describe('LahoreSmartCityComponent', () => {
  let component: LahoreSmartCityComponent;
  let fixture: ComponentFixture<LahoreSmartCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LahoreSmartCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LahoreSmartCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
