//Javascript para as funções de codificar e decofificar

//1. Apagar #answer-box e offset ao iniciar

window.cipher = {
  encode: encode,
  decode: decode
};

//Passo a passo da function Encode:
function encode(){

  //2. Captar os valores Input:
  let offset, stringInput
  offset = Number(document.getElementById('offset').value);
  stringInput = document.getElementById('input-box').value;

  let stringEncode = ''

  position = stringInput.length

  for (i=0; i<position; i++) {
    let shiftedChar
    shiftedChar = String.fromCharCode(((stringInput.charCodeAt(i)- 65 + offset) % 26) + 65); //stringInput.charCodeAt(i)); -> retorna o códigoASC[i] para cada letra
    stringEncode += shiftedChar;
  }

  //4. Printar mensagem padrão em negrito e stringEncode em #answer-box
  document.getElementById('output-box').innerHTML = "Pronto, guarde com carinho! \n" + stringEncode;

}

//------------------------------------------------------------------------------
//Passo a passo da function Decode:

function decode(){

  //2. Captar os valores:
  let offset, stringInput
  offset = Number(document.getElementById('offset').value);
  stringInput = document.getElementById('input-box').value;

  //3. Manipular a string/trocar as letras
  let stringDecode = ''

  position = stringInput.length

  for (i=0; i<position; i++) {
    let shiftedChar
    console.log("Original: " + stringInput[i] + ',' + stringInput.charCodeAt(i)); // -> retorna o códigoASC[i] para cada letra
    shiftedChar = ((stringInput.charCodeAt(i)+ 65 - offset) % 26) + 65;
    console.log("Shifted: " + shiftedChar);
    shiftedChar = String.fromCharCode(shiftedChar);
    stringDecode += shiftedChar;
  }
  console.log("Final: " + stringDecode);

  //4. Printar mensagem padrão em negrito e stringEncode em #answer-box
  document.getElementById('output-box').innerHTML = "Desfrute e surpreenda a todos! \n" + stringDecode;
}

/*
window.cipher = {
  cipher.encode(offset, string){
    console.log(offset, string);
  }
  cipher.decode(offset, string){
    console.log(offset, string);
  }
};*/
