import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsmanagementComponent } from './breedsmanagement.component';

describe('BreedsmanagementComponent', () => {
  let component: BreedsmanagementComponent;
  let fixture: ComponentFixture<BreedsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
