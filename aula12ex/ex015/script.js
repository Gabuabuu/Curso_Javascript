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
    if(fsex[0].checked)/*(fsex[0].checked) Seleciona o primeiro gênero, checked serve para selecionar a opcao selecionada*/ {
      genero = 'Homem'
    } else if (fsex[1].checked) {
      genero = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos`
  }
}
