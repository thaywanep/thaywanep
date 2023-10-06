//Animação titulo digitando

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".digitando", {
        speed: 125,
        strings: "Desenvolvedora WEB e Analista de Sistemas ",
        loop: true
    }).go()
})

// MENU RESPONSIVO CLICK
function ativacaoMenu(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}

ativacaoMenu()