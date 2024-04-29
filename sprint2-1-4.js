/* Bloc 1.4: Rest & Spread operators
Nivell 1 - Excercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinaArrays = [...array1, ...array2];
console.log(combinaArrays);


/* Nivell 2 - Excercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.*/

function suma(...nums) {
    let total = 100;
    for (const num of nums) {
      total += num;
    }
    return total;
}
nums = 1 + 2 + 3;
console.log(suma(nums));


/* Nivell 2 - Excercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.*/

const objecte1 = {
    nom: "Juan",
    cognom: "Garcia",
    ciutat: "Barcelona",
};
const objecte2 = {...objecte1, ciutat: "Valencia"};
console.log(objecte1);
console.log(objecte2);


/* Nivell 2 - Excercici 4
Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.*/

const participants = [ "Joan", "Maria", "Jordi", "Marc", "Mercè", "Claudia"];
const [primer, segon, ...resta] = participants;
console.log(primer);
console.log(segon);
console.log(resta);


/* Nivell 3 - Excercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.*/

function novaFuncio(a, b, c) {
    console.log(`El primer element és ${a}, el segon ${b} i el tercer ${c}.`);
}
const nouArray = ["Oli", "Vi", "Gelat"];
novaFuncio(...nouArray);


/* Nivell 3 - Excercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.*/

const nomPersona = {
    nom: "Pere",
    cognom: "Martinez",
};
const locPersona = {
    ciutat: "Barcelona",
    barri: "Gracia",
};
const infocompleta = {...nomPersona, ...locPersona};
console.log(infocompleta);