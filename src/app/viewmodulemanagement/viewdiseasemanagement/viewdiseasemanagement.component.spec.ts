import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdiseasemanagementComponent } from './viewdiseasemanagement.component';

describe('ViewdiseasemanagementComponent', () => {
  let component: ViewdiseasemanagementComponent;
  let fixture: ComponentFixture<ViewdiseasemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdiseasemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdiseasemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
