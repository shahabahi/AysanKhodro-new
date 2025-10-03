import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSellComponent } from './after-sell.component';

describe('AfterSellComponent', () => {
  let component: AfterSellComponent;
  let fixture: ComponentFixture<AfterSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
