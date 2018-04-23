import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryillustrationsComponent } from './galleryillustrations.component';

describe('GalleryillustrationsComponent', () => {
  let component: GalleryillustrationsComponent;
  let fixture: ComponentFixture<GalleryillustrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryillustrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryillustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
