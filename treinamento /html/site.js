/*variáveis*/
let nome = prompt("Qual seu nome completo?");
let pergunta2 = prompt("Você gostaria de se registrar em nosso site?");
let pergunta3 = ("Qual sua idade?");

/*funções*/
function mostra(frase) {
  document.write(frase);
}

/*projeto*/
mostra(`Olá ${nome} seja bem vindo(a) ao nosso site!`);
  pergunta2;

if(pergunta2 == "sim") {
  alert("Certo! Primeiro responda essas perguntas");
  pergunta3 = prompt(pergunta3)
}
