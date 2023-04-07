const burgerbutton = document.querySelector("#burgermenu");
const menu = document.querySelector(".menu");

burgerbutton.addEventListener("click", () => {
    menu.classList.toggle("activestatus");
})

const $formJogador = document.querySelector("form");

function criarJogador(dados) {
    listajogadores.jogadores.push({
        nome: dados.nome,
        tier: dados.tier
    })
}

$formJogador.addEventListener("submit", (event) => {
    event.preventDefault();
    const $inputNome = document.querySelector("input[name=nome]");
    const $inputTier = document.querySelector("input[name=bagrometro]");
    criarJogador({nome: $inputNome.value, tier: $inputTier.value});
})

const listajogadores = {
    jogadores: [
    ]
}


/* //CREATE

function criarJogador(dados) {
    listajogadores.jogadores.push({
        nome: dados.nome,
        tier: dados.tier
    })
}

criarJogador({
    nome: "lucas",
    tier: 1
})

criarJogador({
    nome: "joao",
    tier: 2 
})

console.log(listajogadores.jogadores)

//READ



function listarJogadores() {
    for (let i = 0; i < listajogadores.jogadores.length; i++) {
        console.log(listajogadores.jogadores[i])
    }
}

listarJogadores();

//UPDATE

function updateJogador(id, dados) {
    for (let i = 0; i < listajogadores.jogadores.length; i++) {
        if (listajogadores.jogadores[i].id == id) {
            listajogadores.jogadores[i].nome = dados.nome;
            listajogadores.jogadores[i].tier = dados.tier;
        }
    }
}


//DELETE

function deletarJogador(id) {
    for (let i = 0; i < listajogadores.jogadores.length; i++) {
        if (listajogadores.jogadores[i].id == id) {
            listajogadores.jogadores.splice(i, 1);
        }
    }
} */