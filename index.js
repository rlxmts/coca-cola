const logo = document.getElementById('logo');
const som = new Audio('./assets/sons/sond-coca-cola.mp3')
logo.addEventListener( 'click', ()=> {
    som.play();
})
