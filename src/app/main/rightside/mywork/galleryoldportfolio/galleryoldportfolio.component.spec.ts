import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryoldportfolioComponent } from './galleryoldportfolio.component';

describe('GalleryoldportfolioComponent', () => {
  let component: GalleryoldportfolioComponent;
  let fixture: ComponentFixture<GalleryoldportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryoldportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryoldportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
