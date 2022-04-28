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
          img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade < 21 ){
          //Jovem
          img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade < 50) {
          //adulto
          img.setAttribute('src', 'foto-adulto-m.png')
        } else {
          //idoso
          img.setAttribute('src', 'foto-idoso-m.png')  
        }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
          //Criança
          img.setAttribute('src', 'foto-bebe-f.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade < 50) {
          //adulto
          img.setAttribute('src', 'foto-adulto-f.png')
        } else {
          //idoso
          img.setAttribute('src', 'foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos`
    res.appendChild(img)//Adiciona o elemento "img" depois do res.innerHTML
  }
}
