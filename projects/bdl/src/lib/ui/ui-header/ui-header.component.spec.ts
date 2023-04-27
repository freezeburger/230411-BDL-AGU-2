import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiHeaderComponent } from './ui-header.component';

@Component({
  template: `<bdl-ui-header [color]="testColor">{{testContent}}</bdl-ui-header>`
})
class TestHost {
  testColor = 'primary';
  testContent = 'TEXT_CONTENT';
  @ViewChild(UiHeaderComponent) component!: UiHeaderComponent;
}

fdescribe('UiHeaderComponent', () => {
  let hostComponent: TestHost;
  let hostFixture: ComponentFixture<TestHost>;
  let component: UiHeaderComponent;
  let fixture: ComponentFixture<UiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHost, UiHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiHeaderComponent);
    component = fixture.componentInstance;

    hostFixture = TestBed.createComponent(TestHost);
    hostComponent = hostFixture.componentInstance;

    fixture.detectChanges();
    hostFixture.detectChanges();
  });

  afterEach(async () => {
    fixture.autoDetectChanges(false);
    hostFixture.autoDetectChanges(false);
  })

  it('should render color as secondary by default', () => {
    expect(component.color)
      .withContext('Check initial color value')
      .toBe('secondary');

    expect(fixture.nativeElement.querySelector('div.bg-secondary'))
      .withContext('Check color binding as CSS class')
      .not.toBe(null);
  });

  it('should reflect @Input() color and NG_CONTENT', () => {

    expect(hostComponent.component.color)
      .withContext('Check  @Input() color binding')
      .toBe(hostComponent.testColor);

    expect(hostFixture.nativeElement.querySelector('bdl-ui-header>div.bg-' + hostComponent.testColor))
      .withContext('Check color binding PROPAGATE as CSS class')
      .not.toBe(null);


    expect(hostFixture.nativeElement.querySelector('bdl-ui-header>div>h1')?.textContent)
      .withContext('Check for NG_CONTENT')
      .toBe(hostComponent.testContent);

  });

});
