let player = [];
let computer = [];

let confirmarGame = confirm(`Bem-vindo ao jogo de Blackjack!
 Quer iniciar uma nova rodada?`);

if (confirmarGame === true) {
  // Sorteia  2 cartas iniciais para cada jogador
  let cardsOk = false;
  while (!cardsOk) {
    player.push(comprarCarta());
    player.push(comprarCarta());
    computer.push(comprarCarta());
    computer.push(comprarCarta());
    /*Se as 2 cartas de cada jogador for igual a 2 ases
     devem ser sorteadas novamente senão continue */
    if (
      (player[0].valor === 11 && player[1].valor === 11) ||
      (computer[0].valor === 11 && computer[1].valor === 11)
    ) {
      player = [];
      computer = [];
    } else {
      cardsOk = true;
    }
  }

  // Mostrar cartas iniciais do jogador e computador
  // Perguntar se o jogador deseja comprar mais carta até que diga não
  let purchase = true;

  while (purchase) {
    let texts = " ";
    let points = 0;
    for (const card of player) {
      texts += card.texto + " ";
      points += card.valor;
    }
    if (points > 21) {
      purchase = false;
    } else {
      let confirmPurchase = confirm(
        `Suas cartas são ${texts}. A carta revelada do computador é ${computer[0].texto}.
        Deseja comprar mais uma carta?`
      );

      if (confirmPurchase === true) {
        player.push(comprarCarta());
      } else {
        purchase = false;
      }
    }
  }

  // Cálculo dos pontos do usuário e do computador
  let playerScore = 0;
  let computerScore = 0;
  let playerTexts = "";
  let computerTexts = "";

  for (const card of player) {
    playerScore += card.valor;
    playerTexts += card.texto + " ";
  }

  for (const card of computer) {
    computerScore += card.valor;
    computerTexts += card.texto + "";
  }

  // Compra de cartas do computador
  if (playerScore <= 21) {
    while (computerScore < playerScore && playerScore <= 21) {
      computer.push(comprarCarta());
      computerScore = 0;
      computerTexts = "";
      for (const card of computer) {
        computerScore += card.valor;
        computerTexts += card.texto + " ";
      }
    }
  }

  //Verifica quem ganhou
  let result = "";
  if (playerScore > computerScore && playerScore <= 21) {
    result = "O jogador ganhou!";
  } else if (computerScore > playerScore && computerScore <= 21) {
    result = "O computador ganhou!";
  } else if (computerScore > 21 && playerScore <= 21) {
    result = "O jogador ganhou!";
  } else if (playerScore > 21 && computerScore <= 21) {
    result = "O computador ganhou!";
  } else {
    console.log("Empate!");
  }
  //Imprime no console o resultado de Usuario e Computador
  console.log(
    `Usuario - Cartas: ${playerTexts} - Pontuação: ${playerScore}
    Computador - Cartas: ${computerTexts} - Pontuação: ${computerScore}
      ${result}`
  );
} else {
  console.log("O jogo acabou");
}
