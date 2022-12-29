// 1 - adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
    console.log("Clicou aqui")
});

// 2 - removendo evento

const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// 4 - removendo evento padrão

const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página")
})

// 5 - eventos da tecla

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})