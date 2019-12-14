import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppregistrationComponent } from './appregistration.component';

describe('AppregistrationComponent', () => {
  let component: AppregistrationComponent;
  let fixture: ComponentFixture<AppregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
