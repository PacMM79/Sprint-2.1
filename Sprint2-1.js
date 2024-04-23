/* Nivell 1 - Excercici 1. 
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa.*/

let sum = (a, b) => a + b;
console.log( sum(1, 2) );


/* Nivell 1 - Excercici 2.
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.*/

let randomNumber = () => Math.floor(Math.random() * 101);
console.log(randomNumber());


/* Nivell 1 - Excercici 3.
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona.*/

class person {
    constructor(name){
        this.name = name;
    }
    greet = () => {console.log(`Hola, ${this.name}.`)};
};
let persona = new person ("Fran");
persona.greet();


/* Nivell 2 - Excercici 4.
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.*/

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let printNumbers = (array) => {
    for (let i = 0; i < array.length; i++ ) {
        console.log(array[i]);
    }
}
printNumbers(arrayNumbers);


/* Nivell 3 - Excercici 5.
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.*/

let timeOutFunction = () => setTimeout(() => {console.log("Timeout= 3 segons");}, 3000);
timeOutFunction();
