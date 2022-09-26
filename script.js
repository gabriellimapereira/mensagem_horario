function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()

    if (hora >= 18 && hora <= 24) {
        //boa noite
        msg.innerHTML = `Boa noite! Agora são exatamente ${hora} horas e ${minutes} minutos!`
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = "#0F2440"
    } else if (hora >= 0 && hora <= 4) {
        //boa noite
        msg.innerHTML = `Boa noite! Agora são exatamente ${hora} e ${minutes} da madrugada! Não deveria estar dormindo?`
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = "#0F2440"
    } else if (hora >= 5 && hora < 6) {
        //bom dia (amanhecer)
        msg.innerHTML = `Boa dia! Agora são exatamente ${hora} horas e ${minutes} minutos!`
        img.src = 'imagens/fotoamanhecer.png'
        document.body.style.background = "#F3D1A9"
    } else if (hora >= 6 && hora <= 12) {
        //bom dia
        msg.innerHTML = `Bom dia! Agora são exatamente ${hora} horas e ${minutes} minutos!`
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = "#F6CE21"
    } else if (hora >= 13 && hora <= 16) {
        //boa tarde
        msg.innerHTML = `Boa tarde! Agora são exatamente ${hora} horas e ${minutes} minutos!`
        img.src = 'imagens/fototarde.png'
        document.body.style.background = "#F1A443"
    } else if (hora >= 17 && hora < 18) {
        //boa tarde (entardecer)
        msg.innerHTML = `Boa tardezinha! Agora são exatamente ${hora} horas e ${minutes} minutos!`
        img.src = 'imagens/fotoentardecer.png'
        document.body.style.background = "#8C4646"
    } else {
        //mensagem de erro
        msg.innerHTML = `tem algo mt errado, mas são ${hora} horas :)`
    }
}
