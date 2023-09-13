import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingIndicatorDemoComponent } from './loading-indicator-demo.component';

describe('LoadingIndicatorDemoComponent', () => {
  let component: LoadingIndicatorDemoComponent;
  let fixture: ComponentFixture<LoadingIndicatorDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingIndicatorDemoComponent]
    });
    fixture = TestBed.createComponent(LoadingIndicatorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
