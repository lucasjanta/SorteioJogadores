// Seleciona os elementos do DOM
const nameInput = document.querySelector('#inputnome');
const tierInput = document.querySelector('#inputtier');
const form = document.querySelector('form');
const gridPlayers = document.querySelector('.gridplayers');

// Verifica se já existe um array de jogadores no localStorage
let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];

// Função para adicionar um novo jogador ao array
function addPlayer(name, tier) {
  const player = { nome: name, tier: tier };
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
      playerTier.textContent = player.tier;
      newPlayer.appendChild(playerTier);
      
      // Adiciona o checkbox do jogador
      const playerCheckbox = document.createElement('input');
      playerCheckbox.setAttribute('type', 'checkbox');
      playerCheckbox.setAttribute('name', player.nome);
      /* playerCheckbox.setAttribute('id', player.nome.toLowerCase()); */
      newPlayer.appendChild(playerCheckbox);

      const playerbuttons = document.createElement('div');
      playerbuttons.classList.add('buttons');
      newPlayer.appendChild(playerbuttons);
    
      const playerEditButton = document.createElement('button');
      playerEditButton.textContent = 'Editar';
      playerEditButton.addEventListener('click', () => {
        editPlayer(index);
      });
      playerbuttons.appendChild(playerEditButton);
  
      const playerDeleteButton = document.createElement('button');
      playerDeleteButton.textContent = 'Excluir';
      playerDeleteButton.addEventListener('click', () => {
        deletePlayer(index);
      });
      playerbuttons.appendChild(playerDeleteButton);
  
      
      // Adiciona o novo jogador à lista
      gridPlayers.appendChild(newPlayer);
    });
  }
  
  // Chame a função renderPlayers() sempre que um novo jogador for adicionado
  function addPlayer(name, tier) {
    const player = { nome: name, tier: tier };
    playersArray.push(player);
    localStorage.setItem('playersArray', JSON.stringify(playersArray));
    renderPlayers();
  }

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  addPlayer(nameInput.value, tierInput.value);
  nameInput.value = ''; // Limpa o input do nome
  tierInput.value = ''; // Limpa o input do tier
});


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





// Função para renderizar a lista de jogadores
