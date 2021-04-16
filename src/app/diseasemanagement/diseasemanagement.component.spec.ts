import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasemanagementComponent } from './diseasemanagement.component';

describe('DiseasemanagementComponent', () => {
  let component: DiseasemanagementComponent;
  let fixture: ComponentFixture<DiseasemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
