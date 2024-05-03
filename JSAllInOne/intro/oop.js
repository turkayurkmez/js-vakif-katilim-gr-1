//let user = new Object();
let user = {
    userName: 'turkayurkmez',
    name: 'Türkay',
    lastName: 'Ürkmez',
    city: 'Eskişehir',
    isMarried: true,
    age: 44,

    getFullName() {
        return `${this.name} ${this.lastName}`
    }
};


