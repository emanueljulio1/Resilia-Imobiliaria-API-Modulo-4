const { Router } = require('express')
const CasaController = require('../controllers/CasaController')

const router = Router()

router.get('/casas', CasaController.pegaTodasAsCasas)

module.exports = router