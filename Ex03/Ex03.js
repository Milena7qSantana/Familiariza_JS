let idadeElemento = document.getElementById("idade");

function enviarIdade() {
  let idade = parseInt(idadeElemento.value);

  if (idade < 0 || idade > 130) {
    document.getElementById("resultado").innerHTML =
      '<div class="border border-2 border-secondary rounded-pill mt-3 bg-primary w-25"><p class="text-center m-3 fw-bold" style="color: white;">Idade Inválida! <br /> Digite novamente.</p></div>';
  } else {
    if (idade < 16) {
      document.getElementById("resultado").innerHTML =
        '<div class="border border-2 border-secondary rounded-pill mt-3 bg-primary w-25"><p class="text-center m-3 fw-bold" style="color: white;">Não eleitor!</p></div>';
    } else if (idade > 18 && idade < 65) {
      document.getElementById("resultado").innerHTML =
        '<div class="border border-2 border-secondary rounded-pill mt-3 bg-primary w-25"><p class="text-center m-3 fw-bold" style="color: white;">Eleitor obrigatório!</p></div>';
    } else {
      document.getElementById("resultado").innerHTML =
        '<div class="border border-2 border-secondary rounded-pill mt-3 bg-primary w-25"><p class="text-center m-3 fw-bold" style="color: white;">Eleitor facultativo!</p></div>';
    }
  }
}
