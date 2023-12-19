const burgermenu = document.querySelector('#burgermenu');
const menushow = document.querySelector('.menu');
let playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];
const numeroJogadores = document.querySelector('#numerojogadores');
const numeroTimes = document.querySelector('#numerotimes');
const formsorteio = document.querySelector('#formsorteio');
const timesSorteados = document.querySelector('.playerslist');

var lt1 = document.querySelector('.lt1');
var lt2 = document.querySelector('.lt2');
var lt3 = document.querySelector('.lt3');
var lt4 = document.querySelector('.lt4');

burgermenu.addEventListener('click', () => {
  menushow.classList.toggle('activestatus');
})
function sortearJogadores(numeroJogadores, numeroTimes) {
  playersArray = JSON.parse(localStorage.getItem('playersArray')) || [];
  var arrayJogadores = [];
  arrayJogadores = playersArray;
//Define o número de times
  var time = [];
  for (let i = 0; i < numeroTimes; i++) {
    time[i] = [];
      for (let u = 0; u < numeroJogadores; u++) {
        var randomPlayer = Math.floor(Math.random() * arrayJogadores.length);
        time[i].push(arrayJogadores[randomPlayer]);
        arrayJogadores.splice(randomPlayer, 1);
      }
  }

  console.log(time);
  localStorage.setItem('times', JSON.stringify(time));
  return time;
  }

function atualizaLista(times) {
  timesSorteados.innerHTML = '';
  for (let i = 0; i < times.length; i++) {
    const time = document.createElement('div');
    time.classList.add('timesSorteados');
    time.id = `time${i+1}`;
    timesSorteados.appendChild(time);
    const nomeTime = document.createElement('h1');
    nomeTime.innerHTML = `Time ${i+1}`;
    time.appendChild(nomeTime);
    const timeinfo = document.createElement('div');
    timeinfo.classList.add('timeinfo');
    time.appendChild(timeinfo);
    for (let u = 0; u < times[i].length; u++) {
      const jogador = document.createElement('h2');
      jogador.innerHTML = times[i][u].nome;
      timeinfo.appendChild(jogador);
    }
  }
}

  // Adiciona um evento de submissão ao formulário
formsorteio.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  /* var timessorteados = sortearJogadores(numeroJogadores.value); */
  atualizaLista(sortearJogadores(numeroJogadores.value, numeroTimes.value));
});