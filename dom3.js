const tagH = document.getElementsByTagName('h1');


const meuParagrafo = document.querySelector('#meuParagrafo');
const meuBotão = document.querySelector('#meuBotao');

function alterarTexto() {
    meuParagrafo.textContent = 'O texto foi alterado!';
    meuParagrafo.style.color = 'blue';
}

function alterarImagem() {
    const minhaImagem = document.querySelector('#minhaImagem');
    minhaImagem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxPJfAlFcme22fjccQ6YcQdIJ9FifX4z7ynBDJPyfS-mpNSJ3synhhmUu&s=10');
}

tagH[0].setAttribute('class', 'titulo tema--yellow');

meuBotão.addEventListener('click', alterarTexto);

const meuBotaoImagem = document.querySelector('#meuBotaoImagem');
meuBotaoImagem.addEventListener('click', alterarImagem);

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Este é um novo parágrafo adicionado dinamicamente.';
document.body.appendChild(novoElemento);

const tagP = document.querySelector('p').remove();