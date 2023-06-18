import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenUnsubscribeComponent } from './token-unsubscribe.component';

describe('TokenUnsubscribeComponent', () => {
  let component: TokenUnsubscribeComponent;
  let fixture: ComponentFixture<TokenUnsubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenUnsubscribeComponent]
    });
    fixture = TestBed.createComponent(TokenUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
