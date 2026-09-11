const primeiraDiv = document.getElementById('PrimeiraDiv');
primeiraDiv.style.backgroundColor = 'blue';
primeiraDiv.classList.add('text-white', 'p-3', 'rounded', 'mb-2');

const segundaDiv = document.querySelector('#SegundaDiv');
segundaDiv.style.backgroundColor = 'red';
segundaDiv.classList.add('text-white', 'p-3', 'rounded');

const terceiraDiv = document.querySelector('#TerceiraDiv');
terceiraDiv.style.backgroundColor = 'green';
terceiraDiv.classList.add('text-white', 'p-3', 'rounded');

// caso use ele para selecionar uma classe ele apenas retornara a primeira ocorrencia da classe. 
// caso queira selecionar todas as ocorrencias de uma classe use querySelectorAll
const quartaDiv = document.querySelector('#QuartaDiv');
quartaDiv.style.backgroundColor = 'yellow';
quartaDiv.classList.add('text-white', 'p-3', 'rounded');

const tagH1 = document.getElementsByTagName('h1');
for (let i = 0; i < tagH1.length; i++) {
    tagH1[i].style.color = 'dark';
    tagH1[i].style.textAlign = 'center';
}


const tagP = document.querySelector('p');
tagP.style.color = 'dark';
tagP.style.textAlign = 'center';

tagP.classList.add('bg-primary', 'text-white', 'p-3', 'rounded');

const elemento = document.getElementsByClassName('elemento');
console.log(elemento);




