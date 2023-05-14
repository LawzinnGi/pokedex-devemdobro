const botaAlterarTema= document.getElementById("botao-alterar-tema"); 

const body=document.querySelector("body");

const imagemBotaoTrocaDeTema 
=document.querySelector(".imagem-botao")


botaAlterarTema.addEventListener("click", () =>{

    const modoEscuroEstaativo= body.classList.contains("modo-escuro");

    

    body.classList.toggle("modo-escuro");

    
    if (modoEscuroEstaativo){imagemBotaoTrocaDeTema.setAttribute("src" , "./src/imagens/sun.png")
     
    
    } 
    else{
        
        
        
        imagemBotaoTrocaDeTema.setAttribute("src" , "./src/imagens/moon.png")

    }



 
})