/*const btn = document.querySelectorAll(".botao")
const fundo = document.querySelectorAll(".fundo")
for(let i=0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
        fundo.style.background = this.getAttribute("data-color")
        this.style.color = this.getAttribute("data-color")
    })
}*/

var color = ["#030212","#1c08e2","#211A4F"]

document.querySelector("button#botao1").addEventListener("click",
    function(){
        document.querySelector("body").style.background = color[1]
    });