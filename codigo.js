// Seleciona os elementos do DOM
const nameInput = document.querySelector('#inputnome');
const tierInput = document.querySelector('#inputtier');
const formbagres = document.querySelector('#formbagre');
const gridPlayers = document.querySelector('.gridplayers');
const totalJogadores = document.querySelector('.valorjogadorestotal');
const totalPix = document.querySelector('.valortotalpix');
const atualizarvalor = document.querySelector('#submitvalorpix');
var checadas = document.querySelectorAll('input[type="checkbox"]:checked');
var valorPix = document.querySelector('#valorpix').value;
var pagantes = 0;

// Verifica se já existe um array de jogadores no localStorage
let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];

window.onload = renderPlayers();
// Função para adicionar um novo jogador ao array
function addPlayer(name, tier) {
  const player = { nome: name, tier: tier, playerCheckbox: false };
  playersArray.push(player);
  localStorage.setItem('playersArray', JSON.stringify(playersArray));
}

function renderPlayers() {
    // Remove todos os elementos de jogadores existentes
    while (gridPlayers.firstChild) {
      gridPlayers.removeChild(gridPlayers.firstChild);
    }
    
    // Percorre o array de jogadores e cria um novo elemento de jogador para cada objeto no array
    playersArray.forEach((player, index) => {
      // Cria um novo elemento HTML para o jogador
      const newPlayer = document.createElement('div');
      newPlayer.classList.add('player');
      
      // Adiciona o nome do jogador
      const playerName = document.createElement('h1');
      playerName.textContent = player.nome;
      newPlayer.appendChild(playerName);
      
      // Adiciona a pontuação do jogador
      const playerTier = document.createElement('p');
      playerTier.classList.add('tier');
      playerTier.textContent = player.tier;
      newPlayer.appendChild(playerTier);
      
      // Adiciona o checkbox do jogador
      const playerCheckboxInput = document.createElement('input');
      playerCheckboxInput.setAttribute('type', 'checkbox');
      playerCheckboxInput.setAttribute('name', player.nome);
      playerCheckboxInput.setAttribute('class', 'checkboxjogadores');
      if (player.playerCheckbox) {
        playerCheckboxInput.setAttribute('checked', 'checked');
      } else if (player.playerCheckbox == false) {
        playerCheckboxInput.removeAttribute('checked');}

      newPlayer.appendChild(playerCheckboxInput);

      const playerbuttons = document.createElement('div');
      playerbuttons.classList.add('buttons');
      newPlayer.appendChild(playerbuttons);
    
      const playerEditButton = document.createElement('button');
      playerEditButton.textContent = 'Editar';
      playerEditButton.classList.add('editbutton');
      playerEditButton.addEventListener('click', () => {
        editPlayer(index);
      });
      playerbuttons.appendChild(playerEditButton);
  
      const playerDeleteButton = document.createElement('button');
      playerDeleteButton.textContent = 'Excluir';
      playerDeleteButton.classList.add('deletebutton');
      playerDeleteButton.addEventListener('click', () => {
        deletePlayer(index);
      });
      playerbuttons.appendChild(playerDeleteButton);
  
      
      // Adiciona o novo jogador à lista
      gridPlayers.appendChild(newPlayer);

      totalJogadores.innerHTML = playersArray.length;
    });
  }

function atualizapix() {
  var listacheckboxes = document.querySelectorAll('.checkboxjogadores');
  for (let i = 0; i < listacheckboxes.length; i++) {
    listacheckboxes[i].addEventListener('change', () => {
      if (listacheckboxes[i].checked == true) {
        
        getPlayerByName(listacheckboxes[i].name).playerCheckbox = true;
        checadas = document.querySelectorAll('input[type="checkbox"]:checked');
        pagantes = checadas.length;
        totalPix.innerHTML = "R$" + pagantes * valorPix + "(total: R$" + valorPix * playersArray.length + ")";
        console.log(getPlayerByName(listacheckboxes[i].name))
      } else if(listacheckboxes[i].checked == false){
        
        getPlayerByName(listacheckboxes[i].name).playerCheckbox = false;
        checadas = document.querySelectorAll('input[type="checkbox"]:checked');
        pagantes = checadas.length;
        totalPix.innerHTML = "R$" + pagantes * valorPix + "(total: R$" + valorPix * playersArray.length + ")";
        console.log(getPlayerByName(listacheckboxes[i].name))
      }
    })
  }
}
    
  atualizarvalor.addEventListener('click', () => {
    /* checadas = document.querySelectorAll('input[type="checkbox"]:checked');
    pagantes = checadas.length; */
    valorPix = document.querySelector('#valorpix').value;
    totalPix.innerHTML = "R$" + pagantes * valorPix + "(total: R$" + valorPix * playersArray.length + ")";
  })

// Adiciona um evento de submissão ao formulário
formbagres.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  addPlayer(nameInput.value, tierInput.value);
  nameInput.value = ''; // Limpa o input do nome
  tierInput.value = ''; // Limpa o input do tier
  renderPlayers();
  atualizapix()
});

function getPlayerByName(name) { for (let i = 0; i < playersArray.length; i++) { if (playersArray[i].nome === name) { return playersArray[i]; } } return null;}


const editPlayer = index => {
    // Pede ao usuário um novo nome e tier para o jogador
    const newNome = prompt('Digite o novo nome do jogador:');
    const newTier = prompt('Digite o novo tier do jogador:');
  
    // Atualiza o objeto jogador correspondente no array
    playersArray[index].nome = newNome;
    playersArray[index].tier = newTier;
  
    // Salva o array de jogadores atualizado no localstorage
    localStorage.setItem('playersArray', JSON.stringify(playersArray));
  
    // Renderiza a lista de jogadores atualizada
    renderPlayers();
  }



const deletePlayer = index => {
    // Remove o objeto jogador correspondente do array
    playersArray.splice(index, 1);
  
    // Salva o array de jogadores atualizado no localstorage
    localStorage.setItem('playersArray', JSON.stringify(playersArray));
  
    // Renderiza a lista de jogadores atualizada
    renderPlayers();
  }

  const numeroJogadores = document.querySelector('#numerojogadores');
  const numeroTimes = document.querySelector('#numerotimes');
  const formsorteio = document.querySelector('#formsorteio');


  var lt1 = document.querySelector('.lt1');
  var lt2 = document.querySelector('.lt2');
  var lt3 = document.querySelector('.lt3');
  var lt4 = document.querySelector('.lt4');

  function sortearJogadores(numjogadores, numtimes) {
    let team1 = [];
    let team2 = [];
    let team3 = [];
    let team4 = [];

    console.log(playersArray)
    /* var sorteioteste = (numjogadores, numtimes) => {
      
    } */
  }

  // Adiciona um evento de submissão ao formulário
formsorteio.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  sortearJogadores(numeroJogadores.value, numeroTimes.value);
});