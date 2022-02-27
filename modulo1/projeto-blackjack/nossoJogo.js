console.log("Boas vindas ao jogo de Blackjack!");
let confirmar = confirm("Quer iniciar uma nova rodada");

if (confirmar === true) {
  //Chama a função compararCarta: Imprime o texto e valor da carta. Ex: "10♣️"
  let cart1Player = comprarCarta();
  let cart2Player = comprarCarta();
  let carta1Computer = comprarCarta();
  let carta2Computer = comprarCarta();

  //Soma o valor das 2 cartas
  let playerScore = cart1Player.valor + cart2Player.valor;
  let computerScore = carta1Computer.valor + carta2Computer.valor;

  //Imprime no console o valor da carta1,carta2 e pontuação do Usuario
  console.log(`Usuário - carta1: ${cart1Player.texto}
  carta2: ${cart2Player.texto}
  Pontuação: - ${playerScore}`);

  //Imprime no console o valor da carta1,carta2 e pontuação do Computador
  console.log(`Computador - carta1: ${carta1Computer.texto}
  carta2: ${carta2Computer.texto}
  Pontuação: - ${computerScore}`);

  //Verifica quem ganhou
  if (playerScore > computerScore) {
    console.log("O usuário ganhou!");
  } else if (playerScore < computerScore) {
    console.log("O computador ganhou!");
  } else if (playerScore === computerScore) {
    console.log("Empate!");
  }
} else {
  console.log("O jogo acabou");
}
