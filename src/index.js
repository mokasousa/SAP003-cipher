//EVENTOS DO DOM: Javascript para chamar as funções relacionados aos eventos de
//click nos botões Cifrar e Decifrar

/*
document.getElementById('offset').reset();
document.getElementById('input-box').reset();
document.getElementById('output-box').reset();
*/

function clickCifrar() {
  let offset, stringInput;
  offset = Number(document.getElementById('offset').value);
  stringInput = document.getElementById('input-box').value;
  window.cipher.encode(offset, stringInput);
}


function clickDecifrar (){
let offset, stringInput;
offset = Number(document.getElementById('offset').value);
stringInput = document.getElementById('input-box').value;
window.cipher.decode(offset, stringInput);
}


//Assim dá? document.getElementById('encode-btn').addEventListener('click', window.cipher.encode);
