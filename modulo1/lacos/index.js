// 1. a.
/* const bichinhos = Number(prompt("quantos bichinhos de estimação você tem?"));
console.log(bichinhos);
if (bichinhos === 0) {
  console.log("Que pena! Você pode adotar um pet!");
}
// b.
else {
  let arrayBichinhos = [];
  for (let i = 0; i < bichinhos; i++) {
    arrayBichinhos.push(prompt("diga o nome do seu bichinho"));
  }
  // c.
  console.log(arrayBichinhos);
} */

// 2. a
/* function numeros() {
  const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const array of arrays) {
    console.log(array);
  }
}
numeros(); */

// b.
/* function numeros() {
  const arrays = [10, 14, 30, 18, 28, 87, 50, 22];
  for (const array of arrays) {
    if (array % 10 === 0) {
      console.log(array);
    }
  }
}
numeros(); */

// c.
/* function numeros() {
  const arrays = [10, 14, 30, 11, 22, 87, 50, 22];
  for (const array of arrays) {
    if (array % 2 === 0) {
      console.log(array);
    }
  }
}
numeros(); */

// d.
/* function numeros() {
  const arrays = ["bola", "pedra", "tijolo", "apito", "bala"];
  for (let i = 0; i < arrays.length; i++) {
    console.log(`O elemento do índex ${i} é: ${arrays} `);
  }
}
numeros(); */

// e.

function numeros() {
  const arrays = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
  var min = Math.min(...arrays);
  var max = Math.max(...arrays);
  console.log(`O maior número é ${max} e o menor é ${min}`);
}
numeros();

// Desafio


