let idadeElemento = document.getElementById("idade");

function enviarIdade() {
  let idade = parseInt(idadeElemento.value);

  if (idade < 0 || idade > 130) {
    document.getElementById("resultado").innerText = "Valor inválido!";
  } else {
    if (idade < 16) {
      document.getElementById("resultado").innerHTML = "Não eleitor!";
    } else if (idade > 18 && idade < 65) {
      document.getElementById("resultado").innerText = "Eleitor obrigatório!";
    } else {
      document.getElementById("resultado").innerText = "Eleitor facultativo!";
    }
  }
}
