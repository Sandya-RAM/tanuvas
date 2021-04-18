import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockmanagementComponent } from './addstockmanagement.component';

describe('AddstockmanagementComponent', () => {
  let component: AddstockmanagementComponent;
  let fixture: ComponentFixture<AddstockmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
