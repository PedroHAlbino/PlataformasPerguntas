const express = require('express');

const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('index');
});

app.get('/perguntar', function(req, res){
    res.render('perguntar');
});

app.post('/salvarpergunta', function(req, res){
    res.send("Formulario Recebido")
});

app.listen(4000, function(erro){

    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Rodando liso na porta 4000")
    }

});