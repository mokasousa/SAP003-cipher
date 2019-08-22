//FUNÇÕES PARA EVENTOS DO DOM:

//Chamar a função clickCifrar ao evento de Click no botão Cifrar:
//definir como parâmetros os valores inseridos pelo usuário e chamar a função Encode

document.getElementById("encode-btn").addEventListener("click", function clickCipher() {
  let offset, stringInput;
  offset = parseInt(document.getElementById("offset").value);
  stringInput = document.getElementById("input-box").value;
  const resultEncode = "Pronto, guarde com carinho! \n\n";
  document.getElementById("output-box").innerHTML = resultEncode + window.cipher.encode(offset, stringInput);
});

//Chamar a função clickCifrar ao evento de Click no botão Decifrar ->
//definir como parâmetros os valores inseridos pelo usuário e chamar a função Encode

document.getElementById("decode-btn").addEventListener("click", function clickDecipher() {
  let offset, stringInput;
  offset = parseInt(document.getElementById("offset").value);
  stringInput = document.getElementById("input-box").value;
  const resultDecode = "Desfrute e surpreenda a todos! \n\n";
  document.getElementById("output-box").innerHTML = resultDecode + window.cipher.decode(offset, stringInput);
});
