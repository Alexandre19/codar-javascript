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

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
    super(name, price)
    this.colors = colors
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach((color) => {
        console.log(color)
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 39.90,[
    "Vermelho", 
    "Preto",
    "Amarelo"

])

console.log(hat)

hat.showColors()