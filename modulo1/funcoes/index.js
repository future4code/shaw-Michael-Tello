// ANCHOR Interpretação de código

// 1. a  10  50

// b.  Não seria nada impresso

// 2. a
/*  Cria uma função texto que quando chamada retorna o parametro 
converte para minusculo e aplica o includes,se tiver a palavra cenoura
tanto maiusculo como minusculo sera True senão False 
*/

// b.
/* i.   True
     ii.  True
     iii. False */

//ANCHOR Escrita de código

// 1. a
/* function bio(){
	return  "Eu sou Michael, tenho 28 anos, moro em Aracaju e sou estudante."
}
console.log(bio()) */

// b.
/* const personInformation = (name,age,city,profession) =>{
name = prompt(`Digite seu nome: `)
age = prompt(`Digite sua idade: `)
city = prompt(`Digite sua cidade: `)
profession = prompt(`Digite sua profissão: `)
const answer = `Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${profession}`
return answer
}
console.log(personInformation()) */

// 2. a
/* const sum = (a, b) => a + b;
console.log(sum(2, 5)); */

// b.
/* const boolean = (number1, number2) => {
  if (number1 > number2) {
    return `o numero ${number1} é maior que o numero ${number2}`;
  } else if (number1 === number2) {
    return `o numero ${number1} é igual que o numero ${number2}`;
  } else {
    return "Erro";
  }
};
console.log(boolean(4,4)); */

// c.
/* const par = (a) => {
  if (a % 2 === 0) {
return `o numero ${a} é par`
  } else {
		return `o numero ${a} é impar`
  }
};
console.log(par(11)); */

// d.
/* const message = () =>{
	const phrase = prompt('Digite uma mensagem: ')
	return `O tamanho da mensagem é: ${phrase.length}
	versão da mensagem em maiusculo: ${phrase.toUpperCase()} `
}
console.log(message())	 */

// 3.
/* const sum = (a, b) => `Soma: ${a + b}`;
const subtraction = (a, b) => `Diferença: ${a - b}`;
const multiplication = (a, b) => `Multiplicação: ${a * b}`;
const division = (a, b) => `Divisão: ${a / b}`;
console.log(sum(30, 3));
console.log(subtraction(30, 3));
console.log(multiplication(30, 3));
console.log(division(30, 3)); */

// Desafios

// 1. a
/*  const teste = (parameter) =>{
return parameter
      }
      console.log('Ola World')  */

// b.
const teste2 = (parameter1, parameter2) => {
  const soma = parameter1 + parameter2;
  console.log(soma);
};
teste2(2, 4);
