function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  
  if(fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO] Preencha os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')//Cria um elemento da minha escolha
    img.setAttribute('id', 'foto')//seta um atributo para minha variavel
    if(fsex[0].checked)/*(fsex[0].checked) Seleciona o primeiro gênero, checked serve para selecionar a opcao selecionada*/ {
      genero = 'Homem'
        if (idade >=0 && idade < 10) {
          //Criança
          img.setAttribute('src', '')
        } else if (idade < 21 ){
          //Jovem
        } else if (idade < 50) {
          //adulto
        } else {
          //idoso
        }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >=0 && idade < 10) {
          //Criança 
        } else if (idade < 21 ){
          //Jovem
        } else if (idade < 50) {
          //adulto
        } else {
          //idoso
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos`
  }
}
