function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 19
    msg.innerHTML = `agora são ${hora} horas  e ${minuto} min.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }  
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#CD5B45'
    } 
    else{
        img.src = 'noite.jpg'
        document.body.style.background = '#00008B'
    }
}