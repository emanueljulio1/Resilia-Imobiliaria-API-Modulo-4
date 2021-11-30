const { Router } = require('express')
const AgendaController = require('../controllers/AgendaController')

const router = Router()

router.get('/agenda', Agendaontroller.pegaTodasAsAgendas)
router.get('/agenda/:id', AgendaController.pegaUmAgendamento)
router.post('/agenda', AgendaController.criaAgendamento)
router.put('/agenda/:id', AgendaController.atualizaAgenda)


module.exports = router 