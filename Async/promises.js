const promessa = Promise.resolve(5 + 5)

console.log("Algum codigo")

promessa.then((value) => {
    console.log(`A soma é ${value}`)
})

console.log("outro codigo")