import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppinformationComponent } from './appinformation.component';

describe('AppinformationComponent', () => {
  let component: AppinformationComponent;
  let fixture: ComponentFixture<AppinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
