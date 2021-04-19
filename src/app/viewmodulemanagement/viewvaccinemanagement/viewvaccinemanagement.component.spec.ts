import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvaccinemanagementComponent } from './viewvaccinemanagement.component';

describe('ViewvaccinemanagementComponent', () => {
  let component: ViewvaccinemanagementComponent;
  let fixture: ComponentFixture<ViewvaccinemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvaccinemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvaccinemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
