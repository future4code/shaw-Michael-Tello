// Interpretação de código

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

// Escrita de código
// 1 a
const pessoa = {
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
newFrase();

// 2.
const pessoa1 = {
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
minhaFuncao(pessoa1, pessoa2);

// 3.
var cart = [];
const frutaSacolao1 = {
  nome: "Marco",
  disponivel: true,
};
const frutaSacolao2 = {
  nome: "Marcia",
  disponivel: true,
};
const frutaSacolao3 = {
  nome: "Tadeu",
  disponivel: true,
};
function objetoFruta(parametro) {
  // console.log(parametro);
  // const copiaLista = { ...parametro };
  
  const newCart = cart.push({prodName: 'product 1'});
  // const empurre = cart.push(parametro)
  console.log(newCart);
}

objetoFruta(frutaSacolao1);
