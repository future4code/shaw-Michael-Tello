// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Altura"));
  const largura = Number(prompt("Largura"));
  const resultado = altura * largura;
  console.log(resultado);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Ano atual"));
  const anoNascimento = Number(prompt("Ano de nascimento"));
  const resultado = anoAtual - anoNascimento;
  console.log(resultado);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Nome");
  const idade = prompt("Idade");
  const email = prompt("Email");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Cor 1");
  const cor2 = prompt("Cor 2");
  const cor3 = prompt("Cor 3");
  const array = [cor1, cor2, cor3];
  console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const fontSize1 = string1.length;
  const fontSize2 = string2.length;
  return fontSize1 === fontSize2;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  // const firstElement = array.shift();
  const arrayFirst = array[0];
  return arrayFirst;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const arrayLast = array[array.length - 1];
  return arrayLast;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const arrayLast = array[array.length - 1];
  const arrayFirst = array[0];
  const ultimo = array.pop();
  var primeiro = array.shift();
  array.unshift(arrayLast);
  array.push(arrayFirst);
  return array;
}
console.log(trocaPrimeiroEUltimo([1, 2, 3, 4]));

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const areEqual = string1.toUpperCase() === string2.toUpperCase();
  return areEqual;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
