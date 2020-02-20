var pessoa = { 
    nome: "Antonio",
    sobrenome:"dos Santos Netto" ,
    sexo:"feminino",
    idade: 27, 
    altura:1.8, 
    peso: 80,
    andando: false, 
    metrosCaminhados: 0, 
    fazerAniversario:function(){ 
        this.idade = this.idade ++
    },
    andar:function(){
        this.metrosCaminhados = this.metrosCaminhados + 10
        this.andando = true
    },
    parar:function(){ 
        this.andando = false
    },
    nomeCompleto:function(){
        if(this.sexo == "masculino"){console.log("Olá! Eu sou o " + this.nome + " " + this.sobrenome + "!")}
        else{console.log("Olá! Eu sou a " + this.nome + " " + this.sobrenome + "!")}
    },
    mostrarIdade:function(){
        console.log("Olá, tenho " + this.idade + "anos!" )
    },
    mostrarPeso:function(){  
        console.log("Eu tenho "+ this.peso + "kg."),
    },
    apresentacao:function(){ 
    if (this.sexo == "masculino"){ this.msgNome = "Olá! Eu sou o"}
    else{ this.msgNome = "olá eu sou a "} 
    if (this.idade>1) {this.msgAno = "anos"} 
    else{ this.msgAno= "ano"}
    if (this.peso> 1){this.msgPeso = "kgs"}
    else{this.msgPeso = "kg"},
    if (this.altura > 1){ this.msgAltura = "metros"}
    else{this.msgAltura = "metro"} 
    if (this.metrosCaminhados >1){this.msgMetros = "metros"}
    else{"metro"}
    console.log(this.msgNome + this.nome + "tenho" + this.idade + this.msgAno + " e tenho " + this.peso + this.msgPeso+"!"+ "E só nesse dia, já andei " + this.metrosCaminhados + this.msgPeso "!")  

    
        
    
    
    
    }  
}