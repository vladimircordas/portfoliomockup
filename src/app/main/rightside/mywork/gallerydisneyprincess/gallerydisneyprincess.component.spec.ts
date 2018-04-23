import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerydisneyprincessComponent } from './gallerydisneyprincess.component';

describe('GallerydisneyprincessComponent', () => {
  let component: GallerydisneyprincessComponent;
  let fixture: ComponentFixture<GallerydisneyprincessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerydisneyprincessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerydisneyprincessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
