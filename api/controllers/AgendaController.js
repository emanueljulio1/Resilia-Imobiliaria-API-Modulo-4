const database = require('../models')

class AgendaController {
    static async pegaTodaAgendas(req,res){
        try{
        const todasAsAgendas = await database.agenda.findAll()
        return res.status(200).json(todasAsAgendas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AgendaController