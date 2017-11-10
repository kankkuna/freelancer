//para llamar a
//
//query.Selector
//querySelectorgo

var header = document.querySelector('header');

//sintaxis del addEventListener(evento,funcion)
//window.onload cuando pase algo ejecutas esto
window.onload.addEventListener('scroll', shrink);

function shrink() {
  header.classList.addClass('shrink');
}
