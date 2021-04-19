import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbreedsmanagementComponent } from './viewbreedsmanagement.component';

describe('ViewbreedsmanagementComponent', () => {
  let component: ViewbreedsmanagementComponent;
  let fixture: ComponentFixture<ViewbreedsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbreedsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbreedsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
