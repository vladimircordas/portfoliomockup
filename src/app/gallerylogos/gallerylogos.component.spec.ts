import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerylogosComponent } from './gallerylogos.component';

describe('GallerylogosComponent', () => {
  let component: GallerylogosComponent;
  let fixture: ComponentFixture<GallerylogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerylogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerylogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
