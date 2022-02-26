//ANCHOR Interpretação de código

// 1. a
/* Matheus Nachtergaele
[object object]
{canal: "Globo", horario: "14h"} */

// 2. a
/*  {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
} */

// b.
/*  {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
} */

// 3. a
/* false
undefined
false
undefined */

//ANCHOR Escrita de código
// 1 a
/* const pessoa = {
  nome: "Amanda",
  apelidos: ["Amandinha", "Mandinha", "Mandi"],
};
function frase() {
  console.log(
    `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
  );
}
frase();

// b
const newPessoa = {
  ...pessoa,
  apelidos: ["Amelia", "Amora", "Amiga"],
};
function newFrase() {
  console.log(
    `Eu sou ${newPessoa.nome}, mas pode me chamar de: ${newPessoa.apelidos[0]}, ${newPessoa.apelidos[1]} ou ${newPessoa.apelidos[2]}`
  );
}
newFrase(); */

// 2.
/* const pessoa1 = {
  nome: "Bruno",
  idade: 23,
  profissao: "Instrutor",
};
const pessoa2 = {
  nome: "Jonas",
  idade: 25,
  profissao: "Pedreiro",
};
function minhaFuncao(pessoa1, pessoa2) {
  console.log(Object.values(pessoa1));
  console.log(Object.values(pessoa2));
}
minhaFuncao(pessoa1, pessoa2); */

// 3.
const carrinho = [];
const abacaxi = {
  nome: "abacaxi",
  disponibilidade: true,
};
const melancia = {
  nome: "melancia",
  disponibilidade: true,
};
const tomate = {
  nome: "tomate",
  disponibilidade: true,
};

function adicionaFrutaNoCarrinho(fruta) {
  carrinho.push(fruta);
}
adicionaFrutaNoCarrinho(abacaxi);
adicionaFrutaNoCarrinho(melancia);
adicionaFrutaNoCarrinho(tomate);

console.log(carrinho);

//TODO Desafios
//  1.
/* const question = () => {
  const person = {
    name: prompt("Nome: "),
    age: prompt("Idade: "),
    profession: prompt("Profissao: "),
  };
  console.log(person);
  console.log(typeof person);
};
question(); */

//  2.
/* const movies = () => {
  const movie1 = {
    nome: "O albergue",
    anoLancamento: 1993,
  };
  const movie2 = {
    nome: "O albergue",
    anoLancamento: 2022,
  };

  if (movie1.anoLancamento < movie2.anoLancamento) {
    return `O primeiro filme foi lançado antes do segundo ${false}`;
  } else if (movie1.anoLancamento === movie2.anoLancamento) {
    return `O primeiro filme foi lançado no mesmo ano do segundo ${false}`;
  }
};
console.log(movies()); */

// 3.
function inverte(fruta) {
  return { ...fruta, disponibilidade: !fruta.disponibilidade };
}
console.log(inverte(abacaxi));
// console.log(inverte(inverte(abacaxi)))
