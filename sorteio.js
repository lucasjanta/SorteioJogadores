let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];
const numeroJogadores = document.querySelector('#numerojogadores');
const numeroTimes = document.querySelector('#numerotimes');
const formsorteio = document.querySelector('#formsorteio');

let arrayJogadores = [];
arrayJogadores = playersArray;

var lt1 = document.querySelector('.lt1');
var lt2 = document.querySelector('.lt2');
var lt3 = document.querySelector('.lt3');
var lt4 = document.querySelector('.lt4');
function sortearJogadores(numjogadores, numtimes) {

console.log(arrayJogadores);

for (let i = 0; i < arrayJogadores.length; i++) {
  const player = arrayJogadores[i];
  
  
}





















































// CÓDIGO PADRÃO DE SORTEIO FUNCIONANDO APENAS ATÉ O TERCEIRO JOGADOR SORTEADO












    /* const jogadoresPorTier = {};
    
    playersArray.forEach(jogador => {
        const { tier } = jogador;
        if (!jogadoresPorTier[tier]) {
          jogadoresPorTier[tier] = []; // Se não existir, cria um novo array vazio para o tier
        }
        jogadoresPorTier[tier].push(jogador); // Adiciona o jogador ao array correspondente ao seu tier
      });

      console.log(jogadoresPorTier);

      function sortearJogadordoTier(tier) {
        return jogadoresPorTier[tier][Math.floor(Math.random() * jogadoresPorTier[tier].length)]
      }

      function mandaparaotime(time) {
        time.push(jogadorsorteadotier3);
        time.push(jogadorsorteadotier2);
        time.push(jogadorsorteadotier1);
      }

      function tirarDoArrayAux(){
        for (let i = 0; i < jogadoresPorTier[1].length; i++) {
          if (jogadoresPorTier[1][i].id === jogadorsorteadotier1.id && jogadoresPorTier[1][i].nome === jogadorsorteadotier1.nome) {
            jogadoresPorTier[1].splice(i, 1);
            break;
          }}

          for (let i = 0; i < jogadoresPorTier[2].length; i++) {
            if (jogadoresPorTier[2][i].id === jogadorsorteadotier2.id && jogadoresPorTier[2][i].nome === jogadorsorteadotier2.nome) {
              jogadoresPorTier[2].splice(i, 1);
              break;
            }}

            for (let i = 0; i < jogadoresPorTier[3].length; i++) {
              if (jogadoresPorTier[3][i].id === jogadorsorteadotier3.id && jogadoresPorTier[3][i].nome === jogadorsorteadotier3.nome) {
                jogadoresPorTier[3].splice(i, 1);
                break;
              }}
              
      }

      function sorteardenovo() {
        jogadorsorteadotier1 = sortearJogadordoTier(1);
        jogadorsorteadotier2 = sortearJogadordoTier(2);
        jogadorsorteadotier3 = sortearJogadordoTier(3);
      }

      var jogadorsorteadotier1 = sortearJogadordoTier(1);
      var jogadorsorteadotier2 = sortearJogadordoTier(2);
      var jogadorsorteadotier3 = sortearJogadordoTier(3);
      
      

      if (numtimes == 2) {
        let team1 = [];
        let team2 = [];

        if (numjogadores == 4) {
          mandaparaotime(team1);
          tirarDoArrayAux();
          sorteardenovo();
          mandaparaotime(team2);
          tirarDoArrayAux();



          console.log(team1);
          console.log(team2);
          console.log(jogadoresPorTier);
          

          } else if(numjogadores == 5){
            
          }

      } else if (numtimes == 3) {
        let team1 = [];
        let team2 = [];
        let team3 = [];
      } else if (numtimes == 4){
        let team1 = [];
        let team2 = [];
        let team3 = [];
        let team4 = [];
      }
       */



      /* console.log(team1);
      console.log(team2);
      console.log(team3);
      console.log(team4); */

    /* var sorteioteste = (numjogadores, numtimes) => {
      
    } */
  }

  // Adiciona um evento de submissão ao formulário
formsorteio.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  sortearJogadores(numeroJogadores.value, numeroTimes.value);
});