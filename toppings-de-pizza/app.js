const contenedor = document.getElementById('contenedor');
//console.log(contenedor);/* en coonsola en el servidor hago click en el div y observo todas las propiedades */
console.log(typeof contenedor.innerHTML)/* inner interno */

const titulo = document.getElementById('titulo');
console.log(typeof titulo) /* tagName tipo de etiqueta */

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

//seleccionar por elementos
const misToppings = document.getElementsByTagName('li');
console.log(misToppings.length)

//selector css
//querySelector
//querySelectorAll
//const aceitunas = document.querySelector('#aceitunas');
//console.log(aceitunas)
/* const aceitunas = document.querySelector('.topping');
console.log(aceitunas) */
/* const aceitunas = document.querySelector('.topping.fondo-naranja');
console.log(aceitunas) */
const aceitunas = document.querySelector('.topping.fondo-naranja');
console.log(typeof aceitunas)