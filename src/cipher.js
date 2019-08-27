//FUNÇÕES PARA CIFRAR E DECIFRAR O INPUT DO USUÁRIO

window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, stringInput) {

  let shiftedString, charCode, code, shiftedChar;

  //transformar a string em um array e mapear cada item executando uma função:
  shiftedString = Array.from(stringInput).map((char) => {

    //Associar o número ASC para cada letra do array:
    code = char.charCodeAt();

    //função para trocar letras com acentos para letras sem acentos:
    charCode = accentCheck(code);

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
  let shiftedString, charCode, code, shiftedChar;
  shiftedString = Array.from(stringInput).map((char) => {
    code = char.charCodeAt();
    charCode = accentCheck(code);
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

//função para trocar letras com acentos para letras sem acentos:
function accentCheck (code) {
  switch (code) {
  case 199:
    code = 67;
    break;
  case 231:
    code = 99;
    break;
  case 233:
  case 234:
    code = 101;
    break;
  case 201:
  case 202:
    code = 69;
    break;
  case 224:
  case 225:
  case 226:
  case 227:
    code = 97;
    break;
  case 192:
  case 193:
  case 194:
  case 195:
    code = 65;
    break;
  case 237:
    code = 105;
    break;
  case 205:
    code = 73;
    break;
  case 243:
  case 244:
  case 245:
    code = 111;
    break;
  case 211:
  case 212:
  case 213:
    code = 79;
    break;
  case 250:
    code = 117;
    break;
  case 218:
    code = 85;
    break;
  default:
    break;
  }
  return code;
}

//----------------------------------------------------------------------------//
//OUTRA FORMA DE RESOLVER: USANDO FOR LOOP...

/*
function encode(offset, stringInput) {

  let position, stringEncode, shiftedChar, eachCharCode;

  //Checar se o usuário escreveu no campo certo e escolheu um número válido:
  if (offset !== "" && offset !== 0 && stringInput !== "") {

  //Definir o tamanho da string e declarar uma nova string inicialmente vazia:
  position = stringInput.length;

  stringEncode = "";

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
  return stringEncode;
};

function decode(offset, stringInput) {
  let position, stringDecode, shiftedChar, eachCharCode;
  position = stringInput.length;
  stringDecode = "";
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
  return stringDecode;
};
*/
