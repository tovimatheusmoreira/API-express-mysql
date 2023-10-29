//caminhos que tera na api ex(um caminho para inserir um dado, um caminho para consultar/alterar/deletar um dado...)

const express = require('express')
const router = express.Router()

const carroController = require('./controllers/carroController')

router.get('/pecas', carroController.buscarTodos)
router.get('/peca/:id_pecas', carroController.buscarUm)
router.post('/peca', carroController.inserir)
router.put('/peca/:id_pecas', carroController.alterar)
router.delete('/peca/:id_pecas',carroController.excluir)




module.exports = router



