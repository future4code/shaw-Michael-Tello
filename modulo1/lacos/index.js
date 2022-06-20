//ANCHOR Escrita de código

// 1.
/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
		
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    - 💡 Dica
        <aside>
        ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
        
        </aside>
    c) Por fim, imprima o array com os nomes dos bichinhos no console */
const petQuantity = Number(prompt("Qtd de bichos de estimação: "));
let bichos = [];
if (petQuantity > 0) {
  for (const bich of bichos) {
    bichos.push(bich);
		console.log(bich)
  }
} else {
  console.log("Que pena! Você pode adotar um pet!");
}


// 2.
