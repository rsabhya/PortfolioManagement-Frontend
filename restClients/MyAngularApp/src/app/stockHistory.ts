export class StockHistory {
    constructor(
        public id: number,
        public ticker: string,
        public price: number,
        public amount: number,
        public is_sold: number, 
        public transaction_date: Date) {
    }
}
