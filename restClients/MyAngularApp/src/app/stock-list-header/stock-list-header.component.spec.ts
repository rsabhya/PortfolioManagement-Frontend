import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListHeaderComponent } from './stock-list-header.component';

describe('StockListHeaderComponent', () => {
  let component: StockListHeaderComponent;
  let fixture: ComponentFixture<StockListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
