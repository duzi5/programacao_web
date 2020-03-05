<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
        <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="../vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../css/estilo.css" rel="stylesheet" type="text/css">
    <link href="../css/stylish-portfolio.min.css" rel="stylesheet">
    <link href="../css/estilo.css" rel="stylesheet" type="text/css">
</head>
<body>
    <form class="form-horizontal">
    <fieldset>

    <!-- Form Name -->
    <legend>Formulário de Mensagens</legend>

    <!-- Text input-->
    <div class="form-group">
    <label class="col-md-4 control-label" for="nome">Nome</label>  
        <div class="col-md-5">
        <input id="nome" name="nome" type="text" placeholder="insira seu nome" class="form-control input-md">
            
        </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
    <label class="col-md-4 control-label" for="email">Email </label>  
        <div class="col-md-5">
        <input id="email" name="email" type="text" placeholder="insira seu email" class="form-control input-md">
        </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
    <label class="col-md-4 control-label" for="telefone">Telefone</label>  
        <div class="col-md-4">
        <input id="telefone" name="telefone" type="text" placeholder="insira seu telefone " class="form-control input-md" required="">
        </div>
    </div>

    <!-- Textarea -->
    <div class="form-group">
    <label class="col-md-4 control-label" for="mesnsagem">Mensagem</label>
        <div class="col-md-4">                     
            <textarea class="form-control" id="mensagem" name="mesnsagem">Escreva sua imagem.. </textarea>
        </div>
    </div>

    <!-- Button -->
    <div class="form-group">
    <label class="col-md-4 control-label" for="enviar"></label>
        <div class="col-md-4">
            <button id="enviar" name="enviar" class="btn btn-primary">Enviar</button>
        </div>
    </div>

    </fieldset>
    </form>
        <!-- Bootstrap core JavaScript -->
        <script src="../vendor/jquery/jquery.min.js"></script>
        <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Plugin JavaScript -->
        <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

        <!-- Custom scripts for this template -->
        <script src="../js/stylish-portfolio.min.js"></script>
        <script src="../js/formulario.js"></script>
</body>

</html>
