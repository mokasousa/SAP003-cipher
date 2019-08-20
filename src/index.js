//EVENTOS DO DOM: Javascript para chamar as funções relacionados aos eventos de
//click nos botões Cifrar e Decifrar


function clickCifrar() {
  offset = Number(document.getElementById('offset').value);
  stringInput = document.getElementById('input-box').value;
  window.cipher.encode(offset, stringInput);
}

/*
function clickDecifrar (){
  window.cipher.decode();
}
*/

//Assim dá? document.getElementById('encode-btn').addEventListener('click', window.cipher.encode);
