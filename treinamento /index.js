function mostra(frase) {
  document.write(frase);
}

var nota1 = Number(parseInt(prompt("Qual nota você tirou no primeiro trimestre?")));
var nota2 = Number(parseInt(prompt("Qual nota você tirou no segundo trimestre?")));
var nota3 = Number(parseInt(prompt("Qual nota você tirou no terceiro trimestre?")));

var soma = ((nota1 + nota2 + nota3) /3).toFixed();

if (soma < 5) {
  mostra(`Sua nota foi de ${soma} e por isso você reprovou`);
} else {
  soma >= 5
  mostra(`Parabéns! sua nota foi de ${soma} e você passou de ano`);
}
