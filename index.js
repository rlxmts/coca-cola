const logo = document.getElementById('logo');
const som = new Audio('./assets/sons/sond-coca-cola.mp3');
const imagemMao = document.getElementById('mao-lata');

logo.addEventListener( 'click', ()=> {
    som.play();
})

const btnMenu = document.getElementById('bt-menu');

btnMenu.addEventListener( 'click', ()=> {
    btnMenu.classList.toggle('ativa');
})

window.addEventListener( 'scroll', ()=> {
    const cabecalho = document.querySelector('.cabecalho');
    const link = document.querySelectorAll('.item_link');
    const btLogin = document.querySelector('.box_login span');
    cabecalho.classList.toggle('sticky', window.scrollY > 0);
    btLogin.classList.toggle('ativo', window.scrollY > 0);
    
    link.forEach( (link)=> {
        link.classList.toggle('ativo', window.scrollY > 0);
    })
})
