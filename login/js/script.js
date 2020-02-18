     
     
     console.log("ddd")
     //pinçando o elemento pelo id
        // Criando dois imputs e um botão 
        var app = document.getElementById("app")     
        var login = document.createElement("input")    
        var senha = document.createElement("input")
        var botao = document.createElement("button")
        var labelogin = document.createElement("label") 
        var labelsenha = document.createElement("label")
    
    
        // carecterizando os inputs e o botao
        login.setAttribute("type","text")
        login.setAttribute("placeholder", "Insira seu usuário")   
        botao.innerHTML = "entrar"
        senha.setAttribute("type", "password")
        senha.setAttribute("placeholder","Insira sua senha")
        labelogin.innerHTML= "Login"
        labelsenha.innerHTML="Senha"
       
        
        
         // dando os filhos para a div pinçada
        app.appendChild(labelogin)
        app.appendChild(login)   
        app.appendChild(labelsenha)
        app.appendChild(senha)
        app.appendChild(botao)
