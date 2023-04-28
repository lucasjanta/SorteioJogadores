let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];
const numeroJogadores = document.querySelector('#numerojogadores');
const formsorteio = document.querySelector('#formsorteio');

let arrayJogadores = [];
arrayJogadores = playersArray;

var lt1 = document.querySelector('.lt1');
var lt2 = document.querySelector('.lt2');
var lt3 = document.querySelector('.lt3');
var lt4 = document.querySelector('.lt4');
function sortearJogadores(numjogadores) {

var numtimes = Math.floor(arrayJogadores.length / numjogadores);
console.log(numtimes);

if (numtimes == 2) {
  var times = [[], []]
} else if (numtimes == 3) {
  var times = [[], [], []]
} else if (numtimes == 4) {
  var times = [[], [], [], []]
} else if (numtimes == 5) {
  var times = [[], [], [], [], []]
} else if (numtimes == 6) {
  var times = [[], [], [], [], [], []]
}
  for(let i = 0; i < numtimes; i++) {
    let tierjogador = 3;
    for (let u = 0; u < numjogadores; u++) {
        
        var jogadoraleatorio = Math.floor(Math.random() * arrayJogadores.length);
        while(arrayJogadores[jogadoraleatorio].tier != tierjogador){
          jogadoraleatorio = Math.floor(Math.random() * arrayJogadores.length);//random de 0 a 18
        }
        times[i].push(arrayJogadores[jogadoraleatorio]);
        arrayJogadores.splice(jogadoraleatorio, 1);
        console.log(times);
        tierjogador--;
        if(tierjogador == 0){
          tierjogador = 3;
        }
    }
  }
  arrayJogadores = playersArray;

  }

/* function atualizaLista(numjogadores) {
  
  var numtimes = Math.floor(arrayJogadores.length / numjogadores);
  
  
} */

  // Adiciona um evento de submissão ao formulário
formsorteio.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  sortearJogadores(numeroJogadores.value);
  /* atualizaLista(numeroJogadores.value); */
});