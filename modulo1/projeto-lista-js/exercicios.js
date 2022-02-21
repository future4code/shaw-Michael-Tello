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

//TODO EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Ano atual"));
  const anoNascimento = Number(prompt("Ano Nascimento"));
  const anoRg = Number(prompt("Ano Rg"));

  const idade = anoAtual - anoNascimento; // 2020 - 1993 = 29
  const renova = anoAtual - anoRg;

  // const diferenca = anoAtual - anoRg; // 2020 - 2010 = 10
  // const renova = idade - diferenca; // 29 - 10 = 19

  if (idade <= 20 && renova === 5) {
    console.log(true);
  } else if ((idade > 20 && idade <= 50) && renova === 10) {
    console.log(true);
  } else if (idade > 50) {
    console.log(true);
  } else {
    console.log(false);
  }
}
console.log(checaRenovacaoRG())

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 == 0) return true;
  else if (ano % 4 === 0 && ano % 100 != 0) return true;
  else return false;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const ofAge = prompt("Você tem mais de 18 anos?");
  const highSchool = prompt("Você possui ensino médio completo?");
  const availableCourses = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );

  if (ofAge === "sim" && highSchool === "sim" && availableCourses === "sim")
    console.log(true);
  else console.log(false);
}
// console.log(checaValidadeInscricaoLabenu());
