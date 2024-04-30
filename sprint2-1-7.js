/* Bloc 1.7: Promises & Async/Await
Nivell 1 - Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.*/

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Hola, món'));
    }, 2000);
});


/* Nivell 1 - Exercici 2
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.*/

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});
promesa2.then((result) => {
    console.log(result);
});


/* Nivell 1 - Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.*/

const promesa3 = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Hola") {
                resolve('Promesa resolta després de 2 segons');
            } else {
                reject('Promesa rebutjada: Input no es igual a "Hola"');
            }
        }, 2000);
    });
};
promesa3("Hola")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });


/* Nivell 1 - Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.*/

const promesa4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});
const asyncFunction = async () => {
    return promesa4;
};
asyncFunction().then((result) => {
    console.log(result);
});


/* Nivell 2 - Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.*/

const promesa5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});
async function asyncFunction2() {
    try {
        const result = await promesa5;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
asyncFunction2();


/* Nivell 3 - Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.*/

const promiseA = new Promise((resol, rebutja) => {
    setTimeout(() => {
        resol('Promesa A resolta després de 2 segons');
    }, 2000);
});
const promiseB = new Promise((resol, rebutja) => {
    setTimeout(() => {
        resol('Promesa B resolta després de 3 segons');
    }, 3000);
});
Promise.all([promiseA, promiseB])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });
