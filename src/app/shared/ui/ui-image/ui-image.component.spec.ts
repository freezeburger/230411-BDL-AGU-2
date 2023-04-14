import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImageComponent } from './ui-image.component';

describe('UiImageComponent', () => {
  let component: UiImageComponent;
  let fixture: ComponentFixture<UiImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
