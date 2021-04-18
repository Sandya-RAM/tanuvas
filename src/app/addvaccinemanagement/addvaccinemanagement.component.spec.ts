import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvaccinemanagementComponent } from './addvaccinemanagement.component';

describe('AddvaccinemanagementComponent', () => {
  let component: AddvaccinemanagementComponent;
  let fixture: ComponentFixture<AddvaccinemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvaccinemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvaccinemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
