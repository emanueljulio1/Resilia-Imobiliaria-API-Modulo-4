const { Router } = require('express')
const CasaController = require('../controllers/CasaController')

const router = Router()

router.get('/casas', CasaController.pegaTodasAsCasas)
router.get('/casas/:id', CasaController.pegaUmaCasa)
router.post('/casas', CasaController.criaCasa)
router.put('/casas/:id', CasaController.atualizaCasa)
router.delete('/casas/:id', CasaController.apagaCasa)

module.exports = router