const logo = document.getElementById('logo');
const som = new Audio('./assets/sons/sond-coca-cola.mp3');
const imagemMao = document.getElementById('mao-lata');

logo.addEventListener( 'click', ()=> {
    som.play();
    imagemMao.classList.add('ativa');
})

const btnMenu = document.getElementById('bt-menu');

btnMenu.addEventListener( 'click', ()=> {
    btnMenu.classList.toggle('ativa');
})
