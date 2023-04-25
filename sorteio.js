let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];
const numeroJogadores = document.querySelector('#numerojogadores');
const numeroTimes = document.querySelector('#numerotimes');
const formsorteio = document.querySelector('#formsorteio');


var lt1 = document.querySelector('.lt1');
var lt2 = document.querySelector('.lt2');
var lt3 = document.querySelector('.lt3');
var lt4 = document.querySelector('.lt4');

function sortearJogadores(numjogadores, numtimes) {
    
    console.log(playersArray)

    const jogadoresPorTier = {};
    let team1 = [];
    let team2 = [];
    let team3 = [];
    let team4 = [];

    playersArray.forEach(jogador => {
        const { tier } = jogador;
        if (!jogadoresPorTier[tier]) {
          jogadoresPorTier[tier] = []; // Se não existir, cria um novo array vazio para o tier
        }
        jogadoresPorTier[tier].push(jogador); // Adiciona o jogador ao array correspondente ao seu tier
      });

      console.log(jogadoresPorTier);

      console.log(jogadoresPorTier[1]);

      numtimes.forEach(time => {
          
      })



      console.log(team1);
      console.log(team2);
      console.log(team3);
      console.log(team4);
    /* var sorteioteste = (numjogadores, numtimes) => {
      
    } */
  }

  // Adiciona um evento de submissão ao formulário
formsorteio.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  sortearJogadores(numeroJogadores.value, numeroTimes.value);
});