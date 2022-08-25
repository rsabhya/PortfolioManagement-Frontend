export class Stock {
    constructor(
        public id: number,
        public ticker: string,
        public price: number,
        public amount: number,
        public transactionType: string) {
    }
}
