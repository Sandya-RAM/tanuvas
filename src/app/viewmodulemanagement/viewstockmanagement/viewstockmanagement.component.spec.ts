import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockmanagementComponent } from './viewstockmanagement.component';

describe('ViewstockmanagementComponent', () => {
  let component: ViewstockmanagementComponent;
  let fixture: ComponentFixture<ViewstockmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
