import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerypagesdefineComponent } from './gallerypagesdefine.component';

describe('GallerypagesdefineComponent', () => {
  let component: GallerypagesdefineComponent;
  let fixture: ComponentFixture<GallerypagesdefineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerypagesdefineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerypagesdefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
