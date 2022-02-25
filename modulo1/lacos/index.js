/* TODO 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
	
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
    - 💡 Dica
        <aside>
        ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
        
        </aside>
    c) Por fim, imprima o array com os nomes dos bichinhos no console */

const bichos = Number(prompt("Qts pets voce tem?"));
if (bichos === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else {
  let nomePets = prompt("Digite o nome dos pets um por um: ");
  for (let bichos = 0; bichos < nomePets.length; bichos++) {
    nomePets.push(bichos[i]);
  }
}

/* let nomePets = [];
let i = 0;
while (i < nomePets.length) {
  let novoItem = "O elemento " + i.toString() + " é ";
  novoItem += nomePets[i].toString();
  nomePets.push(novoItem);
  i++;
  console.log(novoItem);
} */

// 2. a
/* function numeros() {
 const arrays = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
  for (const array of arrays) {
    console.log(array);
  }
}
numeros(); */

// b.
/* function numeros() {
  const arrays = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
  for (const array of arrays) {
    console.log(array / 10);
  }
}
numeros(); */

// c.
/* function numeros() {
  const arrays = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
  for (const arr of arrays) {
    if (arr % 2 === 0) {
      console.log(arr);
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
  const maior = Math.max.apply(Math, arrays);
  const menor = Math.min.apply(Math, arrays);
  console.log(`Maior: ${maior}`)
  console.log(`Menor: ${menor}`)
}
numeros(); */
