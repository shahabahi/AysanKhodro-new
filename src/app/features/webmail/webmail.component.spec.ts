import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmailComponent } from './webmail.component';

describe('WebmailComponent', () => {
  let component: WebmailComponent;
  let fixture: ComponentFixture<WebmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
