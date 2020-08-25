var color = ["#030212","#1c08e2","#211A4F"]

    document.querySelector("button#botao1").addEventListener("click",
    function(){
        document.querySelector("body").style.background = color[0]
    });

    document.querySelector("button#botao2").addEventListener("click",
    function(){
        document.querySelector("body").style.background = color[1]
    });

    document.querySelector("button#botao3").addEventListener("click",
    function(){
        document.querySelector("body").style.background = color[2]
    });