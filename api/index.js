const express = require('express')
const routes = require('./routes')
const port = 3000
const app = express()

routes(app)


app.listen(port, () => console.log(`o servidor está na porta ${ port }`))
module.exports = app
