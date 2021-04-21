import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfarmsmanagementComponent } from './addfarmsmanagement.component';

describe('AddfarmsmanagementComponent', () => {
  let component: AddfarmsmanagementComponent;
  let fixture: ComponentFixture<AddfarmsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfarmsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfarmsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
