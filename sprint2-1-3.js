/* Nivell 1 - Excercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.*/

function procesar(numero, callback) {
    callback(numero);
}
function myCallback(num) {
    console.log(`El nombre es ${num}`);
}
let numero = 8520;
procesar(numero, myCallback);


/* Nivell 1 - Excercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.*/

function calculadora (num1, num2, callback2) {
    callback2(num1, num2);
}
function callback2(num1, num2){
 console.log(`La suma de ${num1} i ${num2} es: ${num1 + num2}`);
}
let num1 = 1;
let num2 = 2;
calculadora(num1, num2, callback2);


/* Nivell 2 - Excercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.*/

function esperarISaludar(nom, callback3) {
    setTimeout(() => {callback3(nom);}, 2000);
}
function callback3(nom) {
    console.log(`El nom es ${nom}`);
}
let nom = "Pepe";
esperarISaludar(nom, callback3);


/* Nivell 2 - Excercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.*/

function processarElements(array, callback4) {
    for (let i = 0; i < array.length; i++) {
        callback4(array[i]);
    }
}
function callback4(element) {
    console.log(element);
}
getArray = [20, 30, 15, "abril", 2024];
processarElements(getArray, callback4);


/* Nivell 3 - Excercici 5
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.*/

function processarCadena(string, callback5) {
    return callback5(string.toUpperCase());
}
function callback5(str) {
    console.log(str);
}
let frase = "Hola el meu nom es Fran";
processarCadena(frase, callback5);