//Javascript para as funções de codificar e decofificar

/*Passo a passo de cada function:

1. Apagar #answer-box
2. Captar os valores:
    offset = .cipher-header input value
    string = #crypto-box textarea value
3. Manipular a string (for loop?)... Algo como:
    var stringEncode = ''
      string.charCodeAt(i) -> retorna o códigoASC[i] para cada letra
      novocódigo[i] = ((códigoASC - 65 + offset) % 26)+65 -> shift o códigoASC de cada letra
      novaLetra[i] = String.fromCharCode(novocódigo[i])
      add novaLetra[i] em stringEncode
      return stringEncode
4. Printar mensagem padrão em negrito e stringEncode em #answer-box
*/

/*
window.cipher = {
  cipher.encode(offset, string){
    console.log(offset, string);
  }
  cipher.decode(offset, string){
    console.log(offset, string);
  }
};*/
