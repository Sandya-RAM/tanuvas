import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfarmsmanagementComponent } from './viewfarmsmanagement.component';

describe('ViewfarmsmanagementComponent', () => {
  let component: ViewfarmsmanagementComponent;
  let fixture: ComponentFixture<ViewfarmsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfarmsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfarmsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
