const formulario = document.querySelector('#formbagre');
const lista = document.querySelector('.gridplayers');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeImput = document.querySelector('#inputnome').value;
    const tierbagre = document.querySelector('#inputtier').value;

    const jogador = {
        nome: nomeImput,
        tier: tierbagre
    };

    localStorage.setItem('jogador', JSON.stringify(jogador));

    const jogadorLocal = JSON.parse(localStorage.getItem('jogador'));
    console.log(jogadorLocal);
})