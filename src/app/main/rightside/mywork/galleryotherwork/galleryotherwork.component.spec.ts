import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryotherworkComponent } from './galleryotherwork.component';

describe('GalleryotherworkComponent', () => {
  let component: GalleryotherworkComponent;
  let fixture: ComponentFixture<GalleryotherworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryotherworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryotherworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
