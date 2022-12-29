class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDescon(discount) {
        return this.price * ((100 - discount) / 100)
    }
    
}

const shirt = new Product("Camisa gola V", 20)

console.log(shirt)

console.log(shirt.productWithDescon(10))
console.log(shirt.productWithDescon(30))