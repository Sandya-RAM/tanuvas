import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermoduleComponent } from './mastermodule.component';

describe('MastermoduleComponent', () => {
  let component: MastermoduleComponent;
  let fixture: ComponentFixture<MastermoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastermoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
