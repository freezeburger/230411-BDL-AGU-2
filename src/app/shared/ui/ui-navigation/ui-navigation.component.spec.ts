import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNavigationComponent } from './ui-navigation.component';

describe('UiNavigationComponent', () => {
  let component: UiNavigationComponent;
  let fixture: ComponentFixture<UiNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
