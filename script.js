
// menu mobile
let menu = document.querySelector("nav");
let btn = document.querySelector("#menu-btn");

if(btn) btn.onclick = ()=> menu.classList.toggle("mobile");

// abrir dropdown perfil
function togglePerfil(){
    document.getElementById("perfilMenu").classList.toggle("show");
}


