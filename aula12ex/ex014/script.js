function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png' //Se hora for maior ou igual a 0 e menor que 12, mostra 'fotomanha'
        document.body.style.background = 'rgb(249, 164, 45)' //Muda o tema do fundo conforme a hora corresponde
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src =  'fototarde.png' //Se hora for maior ou igual a 12 e menor ou igual a 18, mostra 'fototarde'
        document.body.style.background = 'rgb(243, 111, 86)' //Muda o tema do fundo conforme a hora corresponde

    } else {
        //BOA NOITE
        img.src = 'fotonoite.png' //Se hora for maior que 18, mostra 'fotonoite'
        document.body.style.background = 'rgb(16, 31, 40)'  //Muda o tema do fundo conforme a hora corresponde

    }
}

