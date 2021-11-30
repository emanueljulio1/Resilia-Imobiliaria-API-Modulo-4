const { Router } = require('express')
const ApartamentoController = require('../controllers/ApartamentoController')

const router = Router()

router.get('/apartamentos', ApartamentoController.pegaTodosOsApartamentos)
router.get('/apartamentos/:id', ApartamentoController.pegaUmApartamento)
router.post('/apartamentos', ApartamentoController.criaApartamento)
router.put('/apartamentos/:id', ApartamentoController.atualizaApartamento)
router.delete('/apartamentos/:id', ApartamentoController.apagaApartamento)

module.exports = router