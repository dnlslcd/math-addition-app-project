// Buena suerte!
// 1. Genera dos números aleatórios y guárdalos en dos variables

const variable1 = Math.floor(Math.random() * 11) + 1;
const variable2 = Math.floor(Math.random() * 11) + 1;


console.log('Número 1:', variable1);
console.log('Número 2:', variable2);


// 2. Haz la suma de dichos números y guardala en otra variable

const suma = variable1 + variable2;
console.log(suma);
// 3. Cuando el usuario haga clic en el botón, debes comprobar si la suma que has 
// calculado es igual al valor que ha introducido el usuario.
// 3.1 seleccionar el nodo html
// 3.2 sobreescribir la propiedad .textContent
document.querySelector("#primary-number").textContent = variable1;
document.querySelector("#secondary-number").textContent = variable2;
