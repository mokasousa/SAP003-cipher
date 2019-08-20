//Javascript para as funções de codificar e decofificar

//1. Apagar #answer-box e offset ao iniciar

window.cipher = {
  encode: encode,
  decode: decode
};

function encode() {

  //2. Captar os valores Input:
  let offset, stringInput
  offset = Number(document.getElementById('offset').value);
  stringInput = document.getElementById('input-box').value;

  let stringEncode = ''

  position = stringInput.length

  for (i=0; i<position; i++) {

    let shiftedChar, eachCharCode

    eachCharCode = stringInput.charCodeAt(i)
    console.log(eachCharCode)

    if (65<=eachCharCode && eachCharCode<=90) {
      shiftedChar = String.fromCharCode(((eachCharCode - 65 + offset) % 26) + 65); //stringInput.charCodeAt(i)); -> retorna o códigoASC[i] para cada letra
      stringEncode += shiftedChar;
      console.log("Maiúscula" + stringEncode)
    } else if (97<=eachCharCode && eachCharCode<=122) {
      shiftedChar = String.fromCharCode(((eachCharCode - 97 + offset) % 26) + 97); //stringInput.charCodeAt(i)); -> retorna o códigoASC[i] para cada letra
      stringEncode += shiftedChar;
      console.log("Minúscula" + stringEncode)
    } else {
      stringEncode += stringInput.charAt(i)
    }
  }

  //4. Printar mensagem padrão em negrito e stringEncode em #answer-box
  document.getElementById('output-box').innerHTML = "Pronto, guarde com carinho! \n" + stringEncode;

}

//------------------------------------------------------------------------------
function decode(){

  //2. Captar os valores:
  let offset, stringInput
  offset = Number(document.getElementById('offset').value);
  stringInput = document.getElementById('input-box').value;

  //3. Manipular a string/trocar as letras
  let stringDecode = ''

  position = stringInput.length

  for (i=0; i<position; i++) {

    let shiftedChar, eachCharCode

    eachCharCode = stringInput.charCodeAt(i)

    if (65<=eachCharCode && eachCharCode<=90) {
      shiftedChar = String.fromCharCode(((eachCharCode + 65 - offset) % 26) + 65);
      stringDecode += shiftedChar;
    } else if (97<=eachCharCode && eachCharCode<=122) {
      shiftedChar = String.fromCharCode(((eachCharCode + 97 - offset) % 26) + 97);
      stringDecode += shiftedChar;
    }  else {
      stringDecode += stringInput.charAt(i)
    }
  }

  //4. Printar mensagem padrão em negrito e stringEncode em #answer-box
  document.getElementById('output-box').innerHTML = "Desfrute e surpreenda a todos! \n" + stringDecode;
}
