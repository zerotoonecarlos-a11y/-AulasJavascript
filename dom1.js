$('#changeTextBtn').click(function () {
    $('#demo').text('O texto foi alterado!');
    $('#titulo').css('color', 'red');
}
);

const titulo = document.getElementById('titulo');
console.log(titulo);
titulo.style.color = 'blue';
titulo.textContent = 'Novo título alterado via JavaScript';


const textoRoxo = document.getElementsByClassName('texto--roxo');
textoRoxo[0].style.color = 'purple';
textoRoxo[1].style.color = 'green';

const tagsDiv = document.getElementsByTagName('div');
console.log(tagsDiv.length);