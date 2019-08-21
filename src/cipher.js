//Javascript para as funções de codificar e decofificar o input em textarea id#input-box

//1. Apagar textarea id#answer-box e o offset

window.cipher = {
  encode: encode,
  decode: decode
};

function encode() {

  //2. Captar os valores Input:
  offset = Math.abs(Number(document.getElementById('offset').value));
  stringInput = document.getElementById('input-box').value;
  console.log(offset, stringInput)

  if (offset !== '' && offset !== 0 && stringInput !== '') {

    let stringEncode = '';

    position = stringInput.length;

    for (i=0; i<position; i++) {

        let shiftedChar, eachCharCode;

        eachCharCode = stringInput.charCodeAt(i);

        if (65 <= eachCharCode && eachCharCode <= 90) {
            shiftedChar = String.fromCharCode(((eachCharCode - 65 + offset) % 26) + 65); //stringInput.charCodeAt(i)); -> retorna o códigoASC[i] para cada letra
            stringEncode += shiftedChar;
        } else if (97 <= eachCharCode && eachCharCode <= 122) {
            shiftedChar = String.fromCharCode(((eachCharCode - 97 + offset) % 26) + 97); //stringInput.charCodeAt(i)); -> retorna o códigoASC[i] para cada letra
            stringEncode += shiftedChar;
        } else {
            stringEncode += stringInput.charAt(i);
        }
    }
    return stringEncode
  }
}

//------------------------------------------------------------------------------
function decode(){

  //2. Captar os valores:
  //let offset, stringInput;
  offset = Math.abs(Number(document.getElementById('offset').value));
  stringInput = document.getElementById('input-box').value;
  console.log(offset, stringInput)

  if (offset !== '' && offset !== 0 && stringInput !== '') {

    //3. Manipular a string/trocar as letras e inserir numa nova string
    let stringDecode = '';

    position = stringInput.length;

    for (i=0; i<position; i++) {

      let shiftedChar, eachCharCode;

      eachCharCode = stringInput.charCodeAt(i);

      if ( 65 <= eachCharCode && eachCharCode <= 90) {
          shiftedChar = String.fromCharCode(((eachCharCode + 65 - offset) % 26) + 65);
          stringDecode += shiftedChar;
      } else if (97 <= eachCharCode && eachCharCode <= 122) {
          shiftedChar = String.fromCharCode((122 - (122 - eachCharCode + offset) % 26));
          stringDecode += shiftedChar;
      } else {
          stringDecode += stringInput.charAt(i);
      }
    }

    //4. Printar mensagem padrão em negrito e stringDecode em textarea id#answer-box
    return stringDecode
    //document.getElementById('output-box').innerHTML = "Desfrute e surpreenda a todos! \n\n" + stringDecode;
  }
}
