//Javascript para as funções de codificar e decofificar

//Passo a passo da function Encode:

window.cipher = {
  encode: encode,
  //decode: decode
};

function encode(){

//1. Apagar #answer-box e offset ao iniciar

//2. Captar os valores:

//let offset, stringInput

//offset = Number(document.getElementById('offset').value);
//stringInput = document.getElementById('input-box').value;
console.log(offset);
console.log(stringInput);

let stringEncode = ''

//3. Manipular a string/trocar as letras
position = stringInput.length
console.log(position);

for (i=0; i<position; i++) {
  let shiftedASC
  console.log("Original: " + stringInput[i] + ',' + stringInput.charCodeAt(i)); // -> retorna o códigoASC[i] para cada letra
  shiftedChar = String.fromCharCode(((stringInput.charCodeAt(i)- 65 + offset) % 26) + 65);
  console.log("Shifted: " + shiftedChar);
  stringEncode += shiftedChar;
}
console.log("Final: " + stringEncode);

//4. Printar mensagem padrão em negrito e stringEncode em #answer-box
document.getElementById('output-box').innerHTML = "Resultado: " + stringEncode

console.log(offset, stringInput);
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
