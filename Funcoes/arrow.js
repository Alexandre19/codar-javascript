const testArrow = () => {
   console.log("Essa é uma arrow function")
}

testArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("par")
        return
    }

    console.log("impar")
}

parOuImpar(3)

parOuImpar(2)

parOuImpar(11)

parOuImpar(19)

parOuImpar(10)


const raizQuadrada = (x) => x * x

console.log(raizQuadrada(2))

console.log(raizQuadrada(4))