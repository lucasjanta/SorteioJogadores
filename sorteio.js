let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];
const numeroJogadores = document.querySelector('#numerojogadores');
const formsorteio = document.querySelector('#formsorteio');
let arrayJogadores = [];

var lt1 = document.querySelector('.lt1');
var lt2 = document.querySelector('.lt2');
var lt3 = document.querySelector('.lt3');
var lt4 = document.querySelector('.lt4');

function sortearJogadores(numjogadores) {

arrayJogadores = playersArray;
//Define o número de times
var numtimes = Math.floor(arrayJogadores.length / numjogadores);

//Cria os arrays para cada time
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
      /* console.log(times); */
      tierjogador--;
      if(tierjogador == 0){
        tierjogador = 3;
      }
    }
  }
  localStorage.setItem('times', JSON.stringify(times));
  return times;
  }

function atualizaLista(timesSort) {
  let listasTimes = document.querySelectorAll('.listaTime');
  console.log(listasTimes.length);
  
  for (let i = 0; i < timesSort.length; i++) {
    for (let u = 0; u < timesSort[i].length; u++) {
      listasTimes[i].innerHTML += timesSort[i][u].nome + '<br>';
    }
  }
}

  // Adiciona um evento de submissão ao formulário
formsorteio.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  var timessorteados = sortearJogadores(numeroJogadores.value);
  console.log(timessorteados);
  atualizaLista(timessorteados);
});