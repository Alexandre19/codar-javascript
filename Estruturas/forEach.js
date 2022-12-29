const nums = [1, 2, 3, 4, 5, 6, 7, 8]

nums.forEach((numero) => {
    console.log(`O numero é ${numero}`)

})

const posts = [
    { title: "Primeiro post", category: "PHP"},
    { title: "Segundo post", category: "JavaScript"},
    { title: "Terceiro post", category: "Python"}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`)
})