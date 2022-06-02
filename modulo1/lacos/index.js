// 1. a.
<<<<<<< HEAD
/* const bichinhos = Number(prompt("quantos bichinhos de estimação você tem?"));
=======
const bichinhos = Number(prompt("quantos bichinhos de estimação você tem?"));
>>>>>>> lacos
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
<<<<<<< HEAD
} */
=======
}
>>>>>>> lacos

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

/* function numeros() {
  const arrays = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
  var min = Math.min(...arrays);
  var max = Math.max(...arrays);
  console.log(`O maior número é ${max} e o menor é ${min}`);
}
numeros(); */

// Desafio
// 1.
/* console.log("Vamos jogar!");
let acertou = false;
let tentativas = 0;
let player1Choice = Number(prompt("Jogador 1 - Escolha um numero: "));

while (!acertou) {
  let player2Kick = Number(prompt("Jogador 2 - Chute um numero: "));
  tentativas++;
  console.log(`O número chutado foi: ${player2Kick}`);

  if (player2Kick > player1Choice) {
    console.log(`Errou. O número escolhido é maior`);
  } else if (player2Kick < player1Choice) {
    console.log(`Errou. O número escolhido é menor`);
  } else {
    console.log(`Acertou. O número de tentativas foi : ${tentativas}`);
    acertou = true;
  }
} */

// 2.
/* console.log("Vamos jogar!");

const numeroEscolhido = Math.floor(Math.random() * 3);

let acertou = false;
let tentativas = 0;

while (!acertou) {
  alert("Acerte o numero de 1 a 3!");
  let numeroChutado = Number(prompt(`Chute um número: `));
  tentativas++;
  console.log(`O número chutado foi: ${numeroChutado}`);
  if (numeroChutado === numeroEscolhido) {
    console.log("Acertou!");
    console.log(`O número de tentativas foi : ${tentativas}`);
    acertou = true;
  } else if (numeroEscolhido > numeroChutado) {
    console.log("Errou. O número escolhido é maior");
  } else {
    console.log("Errou. O número escolhido é menor");
  }
} */
