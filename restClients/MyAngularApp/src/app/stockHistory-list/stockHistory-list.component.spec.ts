import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHistoryListComponent } from './stockHistory-list.component';

describe('StockHistoryListComponent', () => {
  let component: StockHistoryListComponent;
  let fixture: ComponentFixture<StockHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
