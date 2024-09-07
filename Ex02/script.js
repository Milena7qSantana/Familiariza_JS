let numeroElemento = document.getElementById("numero");

function pegaNumero() {
  let codigo = parseFloat(numeroElemento.value);

  if (codigo < 1 || codigo > 5) {
    document.getElementById("saida").textContent = "Código inválido!";
  } else if (codigo == 1) {
   document.getElementById("saida").textContent = "Escrituário";
  } else if (codigo == 2) {
   document.getElementById("saida").textContent = "Secretária";
  } else if (codigo == 3) {
   document.getElementById("saida").textContent = "Caixa";
  } else if (codigo == 4) {
   document.getElementById("saida").textContent = "Gerente";
  } else {
   document.getElementById("saida").textContent = "Diretor";
  }
}
