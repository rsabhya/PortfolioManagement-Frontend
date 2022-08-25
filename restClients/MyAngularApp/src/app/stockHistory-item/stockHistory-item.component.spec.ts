import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHistoryItemComponent } from './stockHistory-item.component';

describe('StockHistoryItemComponent', () => {
  let component: StockHistoryItemComponent;
  let fixture: ComponentFixture<StockHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
