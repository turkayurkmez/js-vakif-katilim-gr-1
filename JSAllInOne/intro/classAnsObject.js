class Product {

    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }

    set price(value) {
        if (isNaN(value)) {
            console.error('Ürün fiyatı sayısal değer olmalıdır');
            return
        }
        this._price = value;

    }

    get price() {
        return this._price;
    }

    set stock(value) {
        this._stock = value;
    }

    get stock() {
        return this._stock;
    }

    increasePrice(rate) {
        this._price = this._price * (1 + rate);
    }

    // constructor(){

    // }
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }


}