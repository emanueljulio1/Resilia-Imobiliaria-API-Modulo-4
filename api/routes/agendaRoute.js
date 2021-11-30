const { Router } = require('express')
const AgendaController = require('../controllers/AgendaController')

const router = Router()

router.get('/agenda', Agendaontroller.pegaTodasAsAgendas)
router.get('/agenda/:id', CasaController.pegaUmAgendamento)
router.post('/agenda', CasaController.criaAgendamento)


module.exports = router 