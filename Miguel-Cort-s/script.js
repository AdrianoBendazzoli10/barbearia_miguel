<<<<<<< HEAD
// menu mobile
let menu = document.querySelector("nav");
let btn = document.querySelector("#menu-btn");

if(btn) btn.onclick = ()=> menu.classList.toggle("mobile");

// abrir dropdown perfil
function togglePerfil(){
    document.getElementById("perfilMenu").classList.toggle("show");
}
=======
// abrir menu
let menu = document.querySelector("nav")
let btn = document.querySelector("#menu-btn")

btn.onclick=()=>{
    menu.classList.toggle("mobile")
}

// rolar para o agendamento
function abrirAgendamento(){
    document.querySelector("#agendamento").scrollIntoView({behavior:"smooth"})
}

// Enviar dados para WhatsApp
document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let nome = document.querySelectorAll("#form input")[0].value
    let tel = document.querySelectorAll("#form input")[1].value
    let data = document.querySelectorAll("#form input")[2].value
    let corte = document.querySelector("#form select").value

    let msg = 
`🔔 Novo Agendamento 🔔

👤 Nome: ${nome}
📱 WhatsApp: ${tel}
✂ Corte: ${corte}
📅 Data/Hora: ${data}

Aguardando confirmação!`

    let url = `https://wa.me/11966314620?text=${encodeURIComponent(msg)}`

    window.open(url,"_blank")
})
>>>>>>> 4e1783692f1d792bc566b9668415563121fdd11a
