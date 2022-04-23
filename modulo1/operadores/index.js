//ANCHOR Interpretação de código
//1.
/* a. , false
 b. , false
 c. , true
 d. , boolean  */

//  2.
/* Faltou Number antes de prompt para converter de string para numero, o numero sera impresso mas de forma errada
ex: 2 + 2 = 22 */

// 3.
/* let primeiroNumero = Number(prompt("Digite um número!"))
let segundoNumero =Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma) */

//ANCHOR  Escrita de código

// 1
/* const ageUser =Number(prompt("Digite sua idade: "))
const ageFriend =Number(prompt("Digite a idade de seu melhor amigo(a): "))
const olderAgeFriend = ageUser > ageFriend
console.log('Sua idade é maior do que a do seu melhor amigo?',olderAgeFriend)
const ageDifference = ageUser - ageFriend
console.log('Diferença da idade é: ',ageDifference) */

// 2.
/* const numberPair =Number(prompt("Digite um número par: "))
console.log(numberPair % 2) */
//c. Qualquer numero par da 0 como resto da divisão
//d. Qualquer numero ímpar da 0 como resto da divisão

// 3.
/* const ageUser =Number(prompt("Digite sua idade: "))
console.log("Sua idade em meses é: ",ageUser * 12)
console.log("Sua idade em dias é: ",ageUser * 365)
console.log("Sua idade em horas é: ",ageUser * 8760) */

// 4.
/* const number1 = Number(prompt("Digite o 1º numero: "));
const number2 = Number(prompt("Digite o 2º numero: "));
console.log("O primeiro numero é maior que segundo?", number1 > number2);
console.log("O primeiro numero é igual ao segundo?", number1 === number2);
console.log(
  "O primeiro numero é divisível pelo segundo?",
  number1 % number2 === 0
);
number1 % number2 === 0;
console.log(
  "O segundo numero é divisível pelo primeiro?",
  number1 % number2 === 0
); */

//ANCHOR Desafios

// 1. a
/* const fahrenheit = 77
const kelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log("kelvin: ",kelvin) */

// b.
/* const celsius = 80
const fahrenheit = (1.8*celsius)+32
console.log("fahrenheit: ",fahrenheit)  */

// c.
/*  const celsius = 30
const fahrenheit = (1.8*celsius)+32
const kelvin = celsius+273
console.log("fahrenheit: ",fahrenheit)  
console.log("kelvin: ",kelvin)   */

// d.
/* const celsius = Number(prompt("Digite um valor para graus celsius: "))
const fahrenheit = (1.8*celsius)+32
const kelvin = celsius+273
console.log("fahrenheit: ",fahrenheit)  
console.log("kelvin: ",kelvin)  */

// 2. a
/* const quilowattHours = 280;
const amount = quilowattHours * 0.05;
console.log(amount) */

// b.
/* const quilowattHours = 280;
const amount = quilowattHours * 0.05 * 15/100;
console.log(amount) */

// 3. a
/* const lb =  20
const kg = lb / 0.4536
console.log("quilogramas : ",kg) */

// b.
/* const oz =  10.5
const kg = oz / 0.0283 
console.log("quilogramas : ",kg) */

// c.
/* const mi =  100
const m = mi / 1609
console.log("metros : ",m) */

// d.
/* const ft =  50
const m = ft / 0.3048
console.log("metros : ",m) */

// e.
/* const gal =  103.56
const l = gal / 3.78541
console.log("litros : ",l) */

// f.
/* const xic =  450
const l = xic * 6 / 25
console.log("litros : ",l)  */

// g.
const lb = Number(prompt("Digite um valor em libras: "));
const kg = lb / 0.4536;
console.log("quilogramas : ", kg);
