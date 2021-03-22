import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSelectedComponent } from './images-selected.component';

describe('ImagesSelectedComponent', () => {
  let component: ImagesSelectedComponent;
  let fixture: ComponentFixture<ImagesSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
