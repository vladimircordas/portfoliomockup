import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerypagesComponent } from './gallerypages.component';

describe('GallerypagesComponent', () => {
  let component: GallerypagesComponent;
  let fixture: ComponentFixture<GallerypagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerypagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerypagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
