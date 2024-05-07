// Buena suerte!
// 1. Genera dos números aleatórios y guárdalos en dos variables

const variable1 = Math.floor(Math.random() * 11) + 1;
const variable2 = Math.floor(Math.random() * 11) + 1;


console.log('Número 1:', variable1);
console.log('Número 2:', variable2);


// 2. Haz la suma de dichos números y guardala en otra variable

const suma = variable1 + variable2;
//console.log(suma);

// 2.1 seleccionar el nodo html
// 2.2 sobreescribir la propiedad .textContent
document.querySelector("#primary-number").textContent = variable1;
document.querySelector("#secondary-number").textContent = variable2;

// 3. Cuando el usuario haga clic en el botón, debes comprobar si la suma que has 
// calculado es igual al valor que ha introducido el usuario.
const boton = document.querySelector("#btn");

// 3.1. asociar el evento click al btn
boton.addEventListener("click", function (){

// 3.2. primero hacer un console.log dentro de la funcion para ver si funciona el click
    console.log("el click funciona!");

// 3.3. comparar el valor de ese <input> con el valor de la variable "suma"

const userInput = document.querySelector("#guess").value;
    if (userInput == suma){ // 3.3.1. si son iguales, actualizar la propiedad .textContent del #message con un mensaje tipo "La suma es correcta!"
        document.querySelector("#message").textContent = "La suma es correcta!";
        // 3.3.2. en caso contrario, mensaje tipo "La suma es incorrecta. En realidad, la suma etotal era " - usar el valor de 
        // la variable suma
    } else {
        document.querySelector("#message").textContent = "La suma es incorrecta. En realidad, la suma total era " + suma
    }
});



