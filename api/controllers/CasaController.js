const database = require('../models')

class CasaController {
    static async pegaTodasAsCasas(req,res){
        try{
        const todasAsCasas = await database.casa.findAll()
        return res.status(200).json(todasAsCasas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CasaController