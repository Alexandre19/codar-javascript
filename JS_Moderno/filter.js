const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n;
    }
})

console.log(highNumbers)