var pessoa = { 
            nome: "Antonio",
            sobrenome:"dos Santos Netto" ,
            sexo:"masculino",
            idade: 27, 
            altura:1.8, 
            peso: 80,
            andando: false, 
            metrosCaminhados: 0, 
            fazerAniversario: function() {this.idade = this.idade ++},
            andar:function  () {
                this.metrosCaminhados = this.metrosCaminhados + 10
                this.andando = true
            },
            parar:function () { 
                this.andando = false
            },
            nomeCompleto:function()  {
                    if(sexo = "masculino"){
                    console.log("Olá! Eu sou o " + this.nome + " " + this.sobrenome + "!")}
                    else{console.log("Olá! Eu sou a " + this.nome + " " + this.sobrenome + "!")}
            },
            mostrarIdade: function()  { 
                console.log("Olá, tenho " + this.idade + "anos!" )
            },
            mostrarPeso: function () { 
               console.log("Eu "+ this.peso + "kg.")
            },
        }


