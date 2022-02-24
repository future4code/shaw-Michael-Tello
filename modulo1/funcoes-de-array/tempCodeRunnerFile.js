const descontos = produtos.filter((produto) => {
  if (produto.preco) {
    console.log(produto.nome, (produto.preco * 0.95).toFixed(2));
  }
});
console.log(descontos);