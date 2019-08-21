//FUNÇÕES PARA EVENTOS DO DOM: chamar as funções relacionados aos eventos de
//click nos botões Cifrar e Decifrar

/*
//Deixar campos vazios ao abrir/renovar a página
document.getElementById('offset').value = '';
document.getElementById('input-box').value= '';
document.getElementById('output-box').value= '';
*/

let offset, stringInput;
offset = Number(document.getElementById('offset').value);
stringInput = document.getElementById('input-box').value;

//2.Chamar a função clickCifrar ao evento de Click no botão Cifrar ->
//define como parâmetros os valores em offset e input-box e chama a função Encode

document.getElementById('encode-btn').addEventListener('click', function clickCifrar() {
  const resultEncode = "Pronto, guarde com carinho! \n\n";
  document.getElementById('output-box').innerHTML = resultEncode + window.cipher.encode(offset, stringInput);
});

//2.Chamar a função clickCifrar ao evento de Click no botão Decifrar ->
//define como parâmetros os valores em offset e input-box e chama a função Decode

document.getElementById('decode-btn').addEventListener('click', function clickDecifrar (){
  const resultDecode = "Pronto, guarde com carinho! \n\n";
  document.getElementById('output-box').innerHTML = resultDecode + window.cipher.decode(offset, stringInput);
});
