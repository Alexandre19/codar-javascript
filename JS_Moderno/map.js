const products = [
    {name: "Camisa", price: 10.99, category:"Roupas"},
    {name: "Panela Elétrica", price: 150, category:"Eletro"},
    {name: "Fogao", price: 799, category:"Eletro"},
    {name: "Calça", price: 89.90, category:"Roupas"},
]

products.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true
    }
})

console.log(products)