/* Nivell 1 - Excercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

function potConduir (edat) {
  return edat >= 18 ? "Pots conduir" : "No pots conduir";
}
edat = 14;
console.log(potConduir(edat));


/* Nivell 1 - Excercici 2
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.*/

num1 = 1;
num2 = 3;
let comparar = num1 > num2 ? "num1 és més gran" : "num2 és més gran";
console.log(comparar);


/* Nivell 2 - Excercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.*/

num = -5;
let resultat = num === 0 ? "El número és zero" : (num > 0 ? "El número és positiu" : "El número és negatiu");
console.log(resultat);


/* Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.*/

function trobarMaxim (a, b, c) {
  return (a > b && a > c) ? `${a} A=${a}, B=${b}, C=${c}`
        : ((b > a && b > c) ? `${b} A=${a}, B=${b}, C=${c}`
            : `${c} A=${a}, B=${b}, C=${c}`);
}
a = 10;
b = 20;
c = 30;
console.log("Valor màxim=" + trobarMaxim(a, b, c + " |"));


/* Nivell 3 - Excercici 4
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.*/

function parOImpar(array) {
  for (const index in array) {
      let text = (array[index] % 2 === 0) ? "parell" : "imparell"; 
      console.log(`${array[index]} és ${text}`);
  }    
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
parOImpar(array);