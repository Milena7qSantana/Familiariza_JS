console.log("programa que calcula a média de duas notas e diz se o aluno foi aprovado ou não.");

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;

console.clear();

console.log(media);

if (media < 4) {
   console.log("Estudante reprovado!");
} else if ( media > 6) {
   console.log("Estudante aprovado!");
} else {
   console.log("Estudante de recuperação!");
}