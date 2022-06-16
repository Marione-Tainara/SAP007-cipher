import cipher from "./cipher.js";
const btnCode = document.getElementById("cipher-button");
btnCode.addEventListener("click", encryptText);

function encryptText(e) {
  e.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("original-text").value;
  const encryptando = cipher.encode(offset, string);
  document.getElementById("returned-text").value = encryptando;
}
const btnDeco = document.getElementById("decipher-button");
btnDeco.addEventListener("click", decryptTexto);

function decryptTexto(e) {
  e.preventDefault();

  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("original-text").value;
  const decryptando = cipher.decode(offset, string);
  document.getElementById("returned-text").value = decryptando;
}

document.getElementById("limpar").addEventListener("click", limpar);

function limpar() {
  document.getElementById("original-text").value = "";
  document.getElementById("returned-text").value = "";
  document.getElementById("offset").value = "1";
}


