import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreedsmanagementComponent } from './addbreedsmanagement.component';

describe('AddbreedsmanagementComponent', () => {
  let component: AddbreedsmanagementComponent;
  let fixture: ComponentFixture<AddbreedsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbreedsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreedsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
