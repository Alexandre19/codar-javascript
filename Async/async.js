async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(4, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

console.log("teste Async")