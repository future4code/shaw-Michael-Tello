// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  array.reverse();
  return array;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => a - b);
  return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((e) => e % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// TODO
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
}

// EXERCÍCIO 08
function retornaNNumerosPares(n) {
  /* let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i += 2) {
    numerosPares.push(i);
  }
  return numerosPares; */
}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero"
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles"
  } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
    return "Escaleno"
  } 
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let novoUsuario = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novoUsuario
}


 /*  const novoUsuario = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novoUsuario */




/*  const result = pessoa.map((user)=>({
...user,
nome: "ANÔNIMO"
}));
return result
 } */


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
