//ANCHOR Interpretação de código
// 1.a  Testa se um numero é divisivel por 2 ou não,se for escreva 'Passou no teste' senão for escreva 'Não passou no teste'
// b.	2,4,6,8
// c.1,3,5,7

// 2. a  Digita uma fruta, caso a fruta seja escrita execute o comando abaixo,senão for execute o comando abaixo de default
// b. O preço da fruta , maça,  é , R$ 2.25, preco
// c. O preço da fruta , maça,  é , R$ 5, preco

// 3. a Digite um numero qualquer e guarde na variavel numero
// b.Esse número passou no teste
// Erro

// c. Sim,a variavel mensagem so podera ser executada se estiver fora do escopo da condicao if

//ANCHOR Escrita de código

// 1.
/* const idade = Number(prompt("Idade: "));
if (idade >= 18) {
  console.log(`É maior de idade,pode dirigir`);
} else {
  console.log(`É menor de idade,não pode dirigir`);
} */

// 2.
/* const turno = prompt(`Digite a letra de acordo com o turno:
 M(matutino)
V(vespertino)
N(noturno) `)
if (turno === 'M' ) {
  console.log(`Bom dia`);
} else if (turno === 'V' ) {
	console.log(`Boa tarde`);
}else if(turno === 'N' ){
	console.log(`Boa noite`);
} */

// 3.
/* const turno = prompt(`Digite a letra de acordo com o turno:
 M(matutino)
 V(vespertino)
 N(noturno) `)
switch(turno) {
  case 'M':
    console.log(`Bom dia`);
    break;
  case 'V':
    console.log(`Boa tarde`);
    break;
		case 'N':
    	console.log(`Boa noite`);
    break;  
} */

// 4.
const pergunta = prompt("qual o gênero de filme que vão assistir? ");
const precoIngresso = Number(prompt("qual o preço do ingresso? "));
const checarAmigo = prompt("seu amigo topa assistir o filme?");
switch (checarAmigo) {
  case "sim":
    console.log(`Genero do filme: ${pergunta}
		Preço: ${precoIngresso}
		Bom filme`);
    break;
  case "nao":
    console.log(`Escolha outro filme`);
    break;
  default:
    console.log(
      `Digite novamente,escoha 'sim' ou 'não'  se seu amigo topa assistir o filme `
    );
}

//ANCHOR Desafio
