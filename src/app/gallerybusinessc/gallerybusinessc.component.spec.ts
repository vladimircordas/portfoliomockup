import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerybusinesscComponent } from './gallerybusinessc.component';

describe('GallerybusinesscComponent', () => {
  let component: GallerybusinesscComponent;
  let fixture: ComponentFixture<GallerybusinesscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerybusinesscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerybusinesscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
