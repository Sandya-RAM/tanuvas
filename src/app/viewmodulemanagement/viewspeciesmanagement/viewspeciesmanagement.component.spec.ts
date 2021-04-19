import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspeciesmanagementComponent } from './viewspeciesmanagement.component';

describe('ViewspeciesmanagementComponent', () => {
  let component: ViewspeciesmanagementComponent;
  let fixture: ComponentFixture<ViewspeciesmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspeciesmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspeciesmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
