const contenedor = document.getElementById('contenedor');
//console.log(contenedor);/* en coonsola en el servidor hago click en el div y observo todas las propiedades */
console.log(typeof contenedor.innerHTML)/* inner interno */

const titulo = document.getElementById('titulo');
console.log(typeof titulo) /* tagName tipo de etiqueta */
console.log(titulo.innerText)
//titulo.innerText = 'Mis Toppings Favoritos' //SE MODIFICA EL TITULO DEL DOMgit 

//class
const toppings = document.getElementsByClassName('topping');
console.log(toppings[0].id);
/* {HTMLCollection(4)[
    "0": {},
    "1": {},
    "2": {},
    "3": {}
]
}
 */

//!seleccionar por elementos
const misToppings = document.getElementsByTagName('li');
console.log(misToppings.length)

//!selector css
//querySelector
//querySelectorAll
//const aceitunas = document.querySelector('#aceitunas');
//console.log(aceitunas)
/* const aceitunas = document.querySelector('.topping');
console.log(aceitunas) */
/* const aceitunas = document.querySelector('.topping.fondo-naranja');
console.log(aceitunas) */
//const aceitunas = document.querySelector('.topping.fondo-naranja');
//console.log(typeof aceitunas)
/* const aceitunas = document.querySelector('ul li.fondo-naranja');
console.log(typeof aceitunas) */

const aceitunas = document.querySelector('ul li:not(.fondo-marron');
console.log(typeof aceitunas) 
//todas las listas menos las listas con clase fondo-marron

//! por favor atention here
//?
//*
const toppinsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppinsNaranja); //NodeList(2) //listas de nodos // retorna 2 elementos

const primerTopping = document.querySelector('.topping')
//console.log(primerTopping.style) //asi veo todas las propiedades de los elementos propiedades en CamelCase desde ahi hacemos:
//!Style //estilo en linea en html
console.log(primerTopping.style)
//primerTopping.style.backgroundColor = 'blue'
//primerTopping.style.color = 'black' //color de letra o rgb #000000
//primerTopping.style.textAling = 'center'
//primerTopping.style.textTransform = 'uppercase'//estilo en linea en html

//!acceder al texto
//!listas
const listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings);
console.log('> innerText')
console.log(listaDeToppings.innerText) //retorna una cadena de caracteres

console.log('> textContent')
console.log(listaDeToppings.textContent)//aparece incluyendo los espacios que figuran en HTML 

console.log('> innerHTML')
console.log(listaDeToppings.innerHTML)//retorna la estructura del HTML, està buenooo

//! estamos ready nuevamente
//* SELECT hay por fin de function the tab
const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');//selecciona primer elemento que coincide
console.log(primerToppingNoMarron);

const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja'); //nos devuelve un arreglo
//console.log(toppingNaranja[0])
//console.log(toppingNaranja[1])

//*tag a
const enlace = document.getElementsByTagName('a');
console.log(enlace[0].getAttribute('href'));
//Eliminar atributo console.log(enlace[0].removeAttribute('href'));
//Actualizo o cambio un elemento console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org/'));
//Eliminar atributo console.log(enlace[0].removeAttribute('href'));

//*verificar si existe una clase
//!Eliminar o agregar clases
const secondTopping = document.querySelector('.topping')
//secondTopping.classList.add('texto-verde'); //change texto to verde
//secondTopping.classList.add('mi-clase');//agrego a al clase el nombre mi-clase
//!método contains
//secondTopping.classList.contains('fondo-marron'); //si posee o no la clase responde con true o false
secondTopping.classList.remove('topping') //eliminamos clases de forma dinamica
console.log(secondTopping.classList); //lista de clases//DomtokenList
//!Eliminar una clase

//*Crear/ agregar y eliminar Elementos del DOM desde 0
//?
const nuevaLista = document.getElementById('nuevaLista');
const nuevoTopping = document.createElement('li');

nuevoTopping.classList.add('topping', 'fondo-naranja');
nuevoTopping.innerText = 'Nueva Clase';

nuevaLista.append(nuevoTopping)

//nuevoTopping.remove();
//nuevaLista.remove();
nuevaLista.appendChild(nuevoTopping);















