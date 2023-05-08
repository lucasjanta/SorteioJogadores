let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];
const numeroJogadores = document.querySelector('#numerojogadores');
const formsorteio = document.querySelector('#formsorteio');

var lt1 = document.querySelector('.lt1');
var lt2 = document.querySelector('.lt2');
var lt3 = document.querySelector('.lt3');
var lt4 = document.querySelector('.lt4');

function sortearJogadores(numjogadores) {

var arrayJogadores = [];
arrayJogadores = playersArray;
//Define o número de times
var numtimes = Math.floor(arrayJogadores.length / numjogadores);

console.log(numtimes);
//Cria os arrays para cada time
switch (numtimes) {
  case 1:
    var times = [[]]
    break;
  case 2:
    var times = [[], []]
    break;
  case 3:
    var times = [[], [], []]
    break;
  case 4:
    var times = [[], [], [], []]
    break;
  case 5:
    var times = [[], [], [], [], []]
    break;
  case 6:
    var times = [[], [], [], [], [], []]
    break;
}

for(let i = 0; i < numtimes; i++) {
  let tierjogador = 3;


  for (let u = 0; u < numjogadores; u++) {

    let numtier = [0, 0, 0];

    for (let i = 0; i < arrayJogadores.length; i++) {
      if (arrayJogadores[i].tier == 3) {
        numtier[2]++;
      }
    }

    for (let i = 0; i < arrayJogadores.length; i++) {
      if (arrayJogadores[i].tier == 2) {
        numtier[1]++;
      }
    }

    for (let i = 0; i < arrayJogadores.length; i++) {
      if (arrayJogadores[i].tier == 1) {
        numtier[0]++;
      }
    }

      var jogadoraleatorio = Math.floor(Math.random() * arrayJogadores.length);

      while(arrayJogadores[jogadoraleatorio].tier != tierjogador && numtier[tierjogador-1] > 0) {
        jogadoraleatorio = Math.floor(Math.random() * arrayJogadores.length);//random de 0 a 18
      }
      if (numtier[tierjogador-1] == 0) {
        tierjogador--;
      } else {
        times[i].push(arrayJogadores[jogadoraleatorio]);
      arrayJogadores.splice(jogadoraleatorio, 1);
      tierjogador--;
      }
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
  /* var timessorteados = sortearJogadores(numeroJogadores.value); */
  atualizaLista(sortearJogadores(numeroJogadores.value));
});