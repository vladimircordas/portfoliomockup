import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerybookiluComponent } from './gallerybookilu.component';

describe('GallerybookiluComponent', () => {
  let component: GallerybookiluComponent;
  let fixture: ComponentFixture<GallerybookiluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerybookiluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerybookiluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
