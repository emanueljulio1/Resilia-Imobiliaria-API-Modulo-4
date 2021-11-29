const { Router } = require('express')
const { pegaTodosOsUsuarios } = require('../controllers/UsuarioControllers')
const UsuarioController = require('../controllers/UsuarioControllers')

const router = Router()

router.get('/usuario', UsuarioController.pegaTodosOsUsuarios)
router.get('/usuario/:id', UsuarioController.pegaUmUsuario)
router.post('/usuario', UsuarioController.criaUsuario)
router.put('/usuario/:id', UsuarioController.atualizaUsuario)
router.delete('/usuario/:id', UsuarioController.apagaUsuario)


module.exports = router 