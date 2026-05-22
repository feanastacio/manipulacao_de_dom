// Manipulação de dom
// Dom -> Document Object Model
// é a forma como o navegador organiza o html para que o js consiga acessar os elementos

// Principais métodos de seleção no DOM

/*
    getByElementId -> serve para selecionar um elemento pelo seu id
    querySelector -> serve para selecionar o 1° elementos que corresponde a um seletor CSS (tag(ex. , h1, h2), ID, nome de classe)
    querySelectorAll -> serve para selecionar TODOS os elementos que correspondem a um seletor
    getElementByClassName -> Serve para selecionar Todos os elementos que correspondem a uma classe
*/

// const titulo = document.getElementById("titulo")
// const valor = document.getElementById("titulo").innerText
// console.log(titulo);
// console.log(valor);

// querySelector
// const titulo = document.querySelector("#titulo"); // chamando id ->
// #nomeid
// const paragrafo = document.querySelector(".paragrafo"); // chamando
// classes -> .nomeclasse
// const tituloH2 = document.querySelector("h2"); // chamando tags -> h2

// console.log(titulo);
// console. log(paragrafo);
// console.log(tituloH2);

// //querySelectorAll
// const elementos = document.querySelectorAll(".texto")
// console.log(elementos); // Imprime o elemento (p)

// elementos.forEach(elemento => console.log(elemento.innerText)); // Imprime o valor do elemento (p)

// // trocando o texto que está dentro do elemento
// elementos.forEach(elemento => elemento.innerText = "Alterado")
// console.log(elementos);

// // trocndo a tag
// elementos.forEach(elemento => elemento.innerHTML = "<h2.item</h2>")

// // troca a cor da fonte (letra)
// elementos.forEach(elemento => elemento.style.color ="#0000FF")

// Eventos 
// Eventos são ações do usuário

// Evento de click
// const botao = document.getElementById("btn")

// // adicionando um "escutador de eventos" no botão
// botao.addEventListener("click", () => {
//     alert("Você clicou!")
// })

// Evento de digitação (input/keyup)

// evento input -> dispara sempre que digita, em tempo real
// const campo = document.getElementById("campo")
// const resultado = document.getElementById("resultado")

// campo.addEventListener("input", () => {
//     resultado.innerText = campo.value
// })

// evento keyup -> dispara quando solta na tela
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value 
//     console.log("Tecla pressionada");
// })

// evento de mouse
const elemento = document.getElementById("troca-cor")
const botao = document.getElementById("btn")

// mouseover -> quando passa o mouse por cima do elemento
elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "#ff0000"
})
