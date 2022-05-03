const bt = document.getElementById('hamburguer');
const navg = document.querySelectorAll('.navbar-mobile-geral')[0];
const close = document.getElementById('close');
const navb = document.querySelectorAll('.navbar-mobile-barra')[0];
bt.onclick = ()=> {
    navg.style.display = "flex";
    setTimeout(()=> {
        navb.style.transform = "translateX(0)";
    },50)
}
close.onclick = ()=> {
    navb.style.transform = "translateX(100%)";
    setTimeout(()=> {
        navg.style.display = "none";
    },300)
}
    
