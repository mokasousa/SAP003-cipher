//FUNÇÕES PARA CIFRAR E DECIFRAR O INPUT DO USUÁRIO

window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, stringInput) {

  let position, stringEncode, shiftedChar, eachCharCode;

  //Checar se o usuário escreveu no campo certo e escolheu um número válido:
  if (offset !== "" && offset !== 0 && stringInput !== "") {

    //Definir o tamanho da string e declarar uma nova string inicialmente vazia:
    position = stringInput.length;

    stringEncode = "";

    //Se o deslocamento for um número positivo:
    if (offset > 0) {

      //Loop para trocar as letras da string:
      for (let i = 0; i < position; i++) {

        //Associar o número ASC para cada letra da string:
        eachCharCode = stringInput.charCodeAt(i);

        //Condição trocar letras Maiúsculas:
        if (65 <= eachCharCode && eachCharCode <= 90) {

          //Trocar o número ASC de acordo com offset e associá-lo a letra correspondente:
          shiftedChar = String.fromCharCode(((eachCharCode - 65 + offset) % 26) + 65);

          //Adicionar a letra à nova string a ser formada:
          stringEncode += shiftedChar;

        //Condição trocar letras minúsculas:
        } else if (97 <= eachCharCode && eachCharCode <= 122) {
          shiftedChar = String.fromCharCode(((eachCharCode - 97 + offset) % 26) + 97);
          stringEncode += shiftedChar;

        //Condição para não alterar outros caracteres da string:
        } else {
          stringEncode += stringInput.charAt(i);
        }
      }

    //Caso o usúario coloque um número negativo (Cifrar passa a Decifrar):
    } else {

      offset = Math.abs(offset);

      for (let i = 0; i < position; i++) {

        eachCharCode = stringInput.charCodeAt(i);

        if (65 <= eachCharCode && eachCharCode <= 90) {
          shiftedChar = String.fromCharCode(((eachCharCode + 65 - offset) % 26) + 65);
          stringEncode += shiftedChar;

        } else if (97 <= eachCharCode && eachCharCode <= 122) {
          shiftedChar = String.fromCharCode((122 - (122 - eachCharCode + offset) % 26));
          stringEncode += shiftedChar;

        } else {
          stringEncode += stringInput.charAt(i);
        }
      }
    }
    return stringEncode;
  }
}
//----------------------------------*****-------------------------------------//

function decode(offset, stringInput) {

  //Checar se o usuário escreveu no campo certo e escolheu um número:
  if (offset !== "" && offset !== 0 && stringInput !== "") {

    let position, stringDecode, shiftedChar, eachCharCode;

    position = stringInput.length;

    stringDecode = "";

    if (offset > 0) {

      for (let i = 0; i < position; i++) {

        eachCharCode = stringInput.charCodeAt(i);

        if (65 <= eachCharCode && eachCharCode <= 90) {
          shiftedChar = String.fromCharCode(((eachCharCode + 65 - offset) % 26) + 65);
          stringDecode += shiftedChar;

        } else if (97 <= eachCharCode && eachCharCode <= 122) {
          shiftedChar = String.fromCharCode((122 - (122 - eachCharCode + offset) % 26));
          stringDecode += shiftedChar;

        } else {
          stringDecode += stringInput.charAt(i);
        }
      }

    //Caso o usúario coloque um número negativo (Decifrar passa a Cifrar):
    } else {

      offset = Math.abs(offset);

      for (let i = 0; i < position; i++) {

        eachCharCode = stringInput.charCodeAt(i);

        if (65 <= eachCharCode && eachCharCode <= 90) {
          shiftedChar = String.fromCharCode(((eachCharCode - 65 + offset) % 26) + 65);
          stringDecode += shiftedChar;

        } else if (97 <= eachCharCode && eachCharCode <= 122) {
          shiftedChar = String.fromCharCode(((eachCharCode - 97 + offset) % 26) + 97);
          stringDecode += shiftedChar;

        } else {
          stringDecode += stringInput.charAt(i);
        }
      }
    }
    return stringDecode;
  }
}
