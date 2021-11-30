const { Router } = require('express')
const AgendaController = require('../controllers/AgendaController')

const router = Router()

router.get('/agenda', AgendaController.pegaTodasAsAgendas)
router.get('/agenda/:id', AgendaController.pegaUmAgendamento)
router.post('/agenda', AgendaController.criaAgendamento)
router.put('/agenda/:id', AgendaController.atualizaAgenda)
router.delete('/agenda/:id', AgendaController.apagaAgendamento)


module.exports = router 