const db = require('../database/connection'); 
const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const AgendasController = require('../Controllers/agendasController'); 
const EstabelecimentosController = require('../Controllers/estabelecimentosController');
const PessoasController = require('../Controllers/pessoasController');
const ServicosController = require('../Controllers/servicosController'); 
const telefonesController = require('../Controllers/telefonesController'); 
 

// definição das rotas
router.get('/agendas', AgendasController.listarAgendas); 
// post
// patch
// delete

router.get('/estabelecimentos', EstabelecimentosController.listarestabelecimentos); 


router.get('/pessoas', PessoasController.listarpessoas); 
// post
// patch

router.get('/servicos', ServicosController.listarservicos); 
// post
// patch
// delete

router.get('/telefones', telefonesController.listartelefones); 
// post
// patch
// delete



module.exports = router;

