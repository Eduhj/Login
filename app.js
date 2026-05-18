const usu = document.getElementById('usu')
const key = document.getElementById('key')
const log = document.getElementById('log')
const res = document.getElementById('res')

const usuario = "Zapani007"
const senha = "senha123"

let t = 3

function logar() {
    if ( t > 0 && usu.value === usuario && key.value === senha) res.textContent = "Seja bem vindo!"
    else {
        t--
        if (t >= 1) alert(`Incorreto, você tem mais ${t} chances`)
        else if (t < 1) {
            alert("Acesso bloqueado")
            log.parentElement.removeChild(log)
        }
    }
}