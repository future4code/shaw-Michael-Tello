/* Crie uma função que recebe um array de números e um número escolhido. 
A função deve retornar quantas vezes este número aparece no array.
Ex: se o array for [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5] e o número escolhido for 4, 
sua função deve dizer: O número 4 aparece 3x
Para o mesmo array, se o número escolhido for 3, sua função deve retornar: Número não encontrado */

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let count = 0;
  arrayDeNumeros.forEach((v) => v === numeroEscolhido && count++);
  
  if (numeroEscolhido !== count) {
    return `Número não encontrado`;
  } else if (numeroEscolhido === count) {
    return `O número ${numeroEscolhido} aparece  ${count}x`;
  }
}
console.log(contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5], 5));
