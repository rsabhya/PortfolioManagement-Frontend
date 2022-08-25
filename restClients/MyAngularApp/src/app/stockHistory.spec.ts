import { StockHistory } from './stockHistory';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new StockHistory(1, "GOOG", 213, 2, 1, new Date())).toBeTruthy();
  });
});
