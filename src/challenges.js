// Desafio 1
function compareTrue(verdadeiro, falso) {
  // seu código aqui
  if (verdadeiro && falso === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}

// Desafio 4
function concatName(frase) {
  // seu código aqui
  let mostreUltimoItem = frase[frase.length - 1];
  let mostrePrimeiroItem = frase[0];
  let novoItem = `${mostreUltimoItem}, ${mostrePrimeiroItem}`;

  return novoItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultWins = wins * 3;
  let resultTies = ties * 1;
  let result = resultWins + resultTies;
  return result;
}

// Desafio 6
function highestCount(array) {
  // pesquisa sobre a funcao math.max: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let maxNumero = Math.max(...array);
  let resultado = 0;
  for (const numeroAtual of array) {
    if (numeroAtual === maxNumero) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let posicaoGato1 = Math.abs(mouse - cat1);
  let posicaoGato2 = Math.abs(mouse - cat2);

  if (posicaoGato1 < posicaoGato2) {
    return 'cat1';
  } if (posicaoGato2 < posicaoGato1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // //Concluído com ajuda do nosso maravilhoso summer de instrução Rod <3
  // seu código aqui
  let novoArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      novoArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      novoArray.push('fizz');
    } else {
      novoArray.push('bug!');
    }
  } return novoArray;
}

// Desafio 9
// pesquisa: https://stackoverflow.com/questions/13726429/regex-string-replace

function encode(string) {
  // seu código aqui
  let code = [
    { letter: /[a]/g, value: '1' },
    { letter: /[e]/g, value: '2' },
    { letter: /[i]/g, value: '3' },
    { letter: /[o]/g, value: '4' },
    { letter: /[u]/g, value: '5' },
  ];
  for (let cod of code) {
    string = string.replace(cod.letter, cod.value);
  }
  return string;
}
console.log(encode('Kamila'));

function decode(string) {
  // seu código aqui
  let code = [
    { letter: /[1]/g, value: 'a' },
    { letter: /[2]/g, value: 'e' },
    { letter: /[3]/g, value: 'i' },
    { letter: /[4]/g, value: 'o' },
    { letter: /[5]/g, value: 'u' },
  ];
  for (let cod of code) {
    string = string.replace(cod.letter, cod.value);
  }
  return string;
}
console.log(decode('K1m3l1'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
