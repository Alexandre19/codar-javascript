let x = 10

if (x != 11) {
 //   throw new Error("O valor de x não pode ser diferente de 11")
}

// try catch

try {
    const soma = x + y
} catch(error) {
  console.log(`Erro no programa: ${error}`)
}