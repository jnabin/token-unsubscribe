import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeConfimationComponent } from './unsubscribe-confimation.component';

describe('UnsubscribeConfimationComponent', () => {
  let component: UnsubscribeConfimationComponent;
  let fixture: ComponentFixture<UnsubscribeConfimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsubscribeConfimationComponent]
    });
    fixture = TestBed.createComponent(UnsubscribeConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
