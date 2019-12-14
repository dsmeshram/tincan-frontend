import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoappsComponent } from './noapps.component';

describe('NoappsComponent', () => {
  let component: NoappsComponent;
  let fixture: ComponentFixture<NoappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
