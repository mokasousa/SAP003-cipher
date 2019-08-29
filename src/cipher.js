//FUNÇÕES PARA CIFRAR E DECIFRAR O INPUT DO USUÁRIO

window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, stringInput) {

  let shiftedString, charCode, shiftedChar;

  //transformar a string em um array e mapear cada item executando uma função:
  shiftedString = Array.from(stringInput).map((char) => {

    //Associar o número ASC para cada letra do array:
    charCode = char.charCodeAt();

    //Condição trocar letras Maiúsculas:
    if (65 <= charCode && charCode <= 90) {

      //Trocar o número ASC de acordo com offset e associá-lo a letra correspondente:
      shiftedChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);

    //Condição trocar letras minúsculas:
    } else if (97 <= charCode && charCode <= 122) {
      shiftedChar = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);

    //Condição para não alterar outros caracteres da string:
    } else {
      shiftedChar = char;
    }

    //retornar as letras alteradas ao array:
    return shiftedChar;
  });

  //retornar a string do array formado pelo map:
  return shiftedString.join("");
}

function decode(offset, stringInput) {
  let shiftedString, charCode, shiftedChar;
  shiftedString = Array.from(stringInput).map((char) => {
    charCode = char.charCodeAt();
    if (65 <= charCode && charCode <= 90) {
      shiftedChar = String.fromCharCode(((charCode + 65 - offset) % 26) + 65);
    } else if (97 <= charCode && charCode <= 122) {
      shiftedChar = String.fromCharCode((122 - (122 - charCode + offset) % 26));
    } else {
      shiftedChar = char;
    }
    return shiftedChar;
  });
  return shiftedString.join("");
}
