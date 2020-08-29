var color = ["#030212","#1c08e2","#211A4F"]
var contador = 0;
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

    
    function enviar(){
        var texto  = document.createTextNode("Um título qualquer");
        document.queryselector("#formulario").appendChild(texto);
       
    };

    function adcElemento () { 
        var mensagem = document.createElement("div");
        mensagem.setAttribute('id', contador);
        document.getElementById("mural").appendChild(mensagem);
        var nome = document.getElementById("nm").value; 
        var msg = document.getElementById("mgm").value;
        var conteudo = document.createTextNode(nome + ": " + msg + "  ");
        var botao = document.createElement("button");
        botao.setAttribute('id', contador);
        botao.setAttribute('onClick', "excluir(this.id)");
        var nomeBotao= document.createTextNode("Excluir");
        botao.appendChild(nomeBotao);
        
        mensagem.appendChild(conteudo);
        mensagem.appendChild(botao);
        
        contador++;
        
      }
      
      function excluir(id){
      	document.getElementById(id).remove();
      }
      
      
