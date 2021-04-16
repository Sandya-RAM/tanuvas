import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsmanagementComponent } from './farmsmanagement.component';

describe('FarmsmanagementComponent', () => {
  let component: FarmsmanagementComponent;
  let fixture: ComponentFixture<FarmsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
