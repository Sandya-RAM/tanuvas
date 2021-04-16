import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesmanagementComponent } from './speciesmanagement.component';

describe('SpeciesmanagementComponent', () => {
  let component: SpeciesmanagementComponent;
  let fixture: ComponentFixture<SpeciesmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
