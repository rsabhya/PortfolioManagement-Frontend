import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListFooterComponent } from './stock-list-footer.component';

describe('StockListFooterComponent', () => {
  let component: StockListFooterComponent;
  let fixture: ComponentFixture<StockListFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockListFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
