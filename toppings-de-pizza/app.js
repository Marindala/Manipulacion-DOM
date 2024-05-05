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
//primerTopping.style.color = 'black'
//primerTopping.style.textAling = 'center'

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

const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingNaranja[0])
console.log(toppingNaranja[1])







