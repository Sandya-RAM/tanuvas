import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspeciesmanagementComponent } from './addspeciesmanagement.component';

describe('AddspeciesmanagementComponent', () => {
  let component: AddspeciesmanagementComponent;
  let fixture: ComponentFixture<AddspeciesmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspeciesmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspeciesmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
