"use strict";

const contenedorPrimario = document.querySelector(".main__container");
const contenedorSecundario = document.querySelector(".secondary__container")
const boton = document.querySelector(".submit");
const circulos = document.querySelectorAll('.circulo');
const figcaption = document.querySelector(".img__description");

let contenidoSeleccionado = '';

const toggleCirculo = (circulo) => {
  if (circulo.classList.contains('seleccionado')) {
    circulo.style.backgroundColor = '';
    circulo.style.color = '';
    circulo.classList.remove('seleccionado');
    contenidoSeleccionado = '';
  } else {
    circulos.forEach((c) => {
      c.classList.remove('seleccionado');
      c.style.backgroundColor = '';
      c.style.color = '';
    });
    
    circulo.style.backgroundColor = "hsl(25, 97%, 53%)";
    circulo.style.color = "white";
    circulo.classList.add('seleccionado');
    contenidoSeleccionado = circulo.innerHTML;
  }
};

circulos.forEach((circulo) => {
  circulo.addEventListener('click', () => toggleCirculo(circulo));
});


boton.addEventListener("click", ()=>{
  contenedorPrimario.style.display = "none";
  contenedorSecundario.style.display = "flex"; 
  figcaption.textContent = `You selected ${contenidoSeleccionado} out of 5`;
})

