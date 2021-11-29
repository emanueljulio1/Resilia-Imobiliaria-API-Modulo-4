const { Router } = require('express')
const CasaController = require('../controllers/CasaController')

const router = Router()

router.get('/casas', CasaController.pegaTodasAsCasas)
router.get('/casas/:id', CasaController.pegaUmaCasa)
router.post('/casas', CasaController.criaCasa)

module.exports = router