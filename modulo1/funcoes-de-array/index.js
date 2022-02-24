//ANCHOR Interpretação de código

// 1. a
/* { nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]
{ nome: 'Laís Petra', apelido: 'Laura' } 1 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]
{ nome: 'Letícia Chijo', apelido: 'Chijo' } 2 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
] */

// 2. a [ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]

// 3.a
/* 	[
	{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" }
	] */

//ANCHOR Exercícios de escrita de código

// 1.
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
/* const doguinhos = pets.map((doguinho) => {
  return doguinho.nome;
});
console.log(doguinhos); */

// b.

/* const dogSalsicha = pets.filter((salsicha) => {
  return salsicha.raca === "Salsicha"
});
console.log(dogSalsicha);  */

// c.
/* const mensagens = pets.filter((mensagem) => {
  if (mensagem.raca === "Poodle") {
    console.log(
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${mensagem.nome} `
    );
  }
}); */

// 2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a.
/* const nomesProdutos = produtos.map((nomesProduto)=> {
	return nomesProduto.nome
})
console.log(nomesProdutos) */

// b.
/* const descontos = produtos.map((produto) => {
  if (produto.preco) {
    return
   nome: produto.nome, (produto.preco * 0.95).toFixed(2);
  }
}); */

// c.
/* const bebidas = produtos.filter((bebida)=>{
return bebida.categoria === 'Bebidas'
})
console.log(bebidas);  */

// d.
/* const limpezas = produtos.filter((limpeza) => {
  return limpeza.nome.includes("Ypê");
});
console.log(limpezas); */

// e.
/* const frases = produtos.filter((frase) => {
  if (frase.nome.includes("Ypê")) {
    console.log(`Compre ${frase.nome} por ${frase.preco}`);
  }
}); */

//ANCHOR Desafios

// 1.
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];
// a.
/* function compare(a, b) {
  if (a.nome < b.nome) return -1;
  if (a.nome > b.nome) return 1;
  return 0;
}
console.log(pokemons.sort(compare)); */

// b.
const itemB = [...new Set(pokemons.map((pokemon) => pokemon.tipo))];
console.log(itemB);
