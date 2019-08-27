//FUNÇÕES PARA EVENTOS DO DOM:

//Chamar a função clickCifrar ao evento de Click no botão Cifrar:
//definir como parâmetros os valores inseridos pelo usuário e chamar a função Encode

document.getElementById("encode-btn").addEventListener("click", function clickCipher() {

  //guardar os valores inseridos pelo usuário:
  const offset = Math.abs(parseInt(document.getElementById("offset").value));
  let stringInput = document.getElementById("input-box").value;

  //Checar se o usuário escreveu no campo certo e escolheu um número válido:
  offset.required;
  stringInput.required;

  if (offset && stringInput) {

    //chamar a função encode e printar na caixa de resultado:
    const resultEncode = "Pronto, guarde com carinho!\n(Guarde a chave de deslocamento também)\n\n";
    document.getElementById("output-box").innerHTML = resultEncode + window.cipher.encode(offset, stringInput);
  }
});

//Chamar a função clickCifrar ao evento de Click no botão Decifrar ->
//definir como parâmetros os valores inseridos pelo usuário e chamar a função Encode

document.getElementById("decode-btn").addEventListener("click", function clickDecipher() {
  const offset = Math.abs(parseInt(document.getElementById("offset").value));
  let stringInput = document.getElementById("input-box").value;
  offset.required;
  stringInput.required;
  if (offset && stringInput) {
    const resultDecode = "Desfrute e surpreenda a todos! \n\n";
    document.getElementById("output-box").innerHTML = resultDecode + window.cipher.decode(offset, stringInput);
  }
});
