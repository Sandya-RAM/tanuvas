import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiseaseManagementComponent } from './add-disease-management.component';

describe('AddDiseaseManagementComponent', () => {
  let component: AddDiseaseManagementComponent;
  let fixture: ComponentFixture<AddDiseaseManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiseaseManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiseaseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
