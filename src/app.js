const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");
const temaSalvo = localStorage.getItem("tema");
const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (temaSalvo === "escuro"){
    root.setAttribute("data-tema", "escuro");
}

ano.textContent = new Date().getFullYear();

btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === 'escuro';

    if (escuro){
        root.removeAttribute("data-tema");
        localStorage.setItem("tema", "claro");
    } else {
        root.setAttribute("data-tema", "escuro");
        localStorage.setItem("tema", "escuro");
    }
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;


    alert("Inscrição realizada!");
})