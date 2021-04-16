import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinemanagementComponent } from './vaccinemanagement.component';

describe('VaccinemanagementComponent', () => {
  let component: VaccinemanagementComponent;
  let fixture: ComponentFixture<VaccinemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
