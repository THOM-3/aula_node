const express = require('express');

const app = express();

//const porta = process.env.PORT || 3333;

const porta = 3333;

//define a porta - ver qual está disponivel no servidor 
app.listen(porta ,() => {

    //console.log('Env: ' + process.env.PORT); // outro jeito de gerar log de funcionamento do servidor 
    console.log('servidor iniciado na porta: ' + porta);
});