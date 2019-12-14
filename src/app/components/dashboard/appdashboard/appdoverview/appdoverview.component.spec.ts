import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdoverviewComponent } from './appdoverview.component';

describe('AppdoverviewComponent', () => {
  let component: AppdoverviewComponent;
  let fixture: ComponentFixture<AppdoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppdoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
