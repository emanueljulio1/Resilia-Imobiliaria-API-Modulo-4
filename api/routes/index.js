const express = require('express')
const usuario = require('./usuarioRoute')
const casas = require('./casaRoutes')
module.exports = app => {
    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
    });
    app.use(express.json())

    app.use(usuario)
    app.use(casas)
}