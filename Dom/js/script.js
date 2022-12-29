// 1 - Movendo-se pelo Dom

console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - Selecionando por Tag

const listItems = document.getElementsByTagName("li")

console.log(listItems)

// 3 - Selecionando elemento por ID

const title = document.getElementById("title")

console.log(title)

// 4 - Selecionando elemento por Classe

const products = document.getElementsByClassName("product")

console.log(products)

// 5 - Selecionando os elementos por CSS

const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)

// 6 - insertBefore

const p = document.createElement("p")

console.log(p)

// 7 - createTextNode

const myText = document.createTextNode("Vamos colocar mais um titulo")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)

// CSS com JavaScript

mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#222"
