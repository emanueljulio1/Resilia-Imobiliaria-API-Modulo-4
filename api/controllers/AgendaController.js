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



static async pegaUmAgendamento(req, res){
    const { id } = req.params
    try{
        const umaAgenda = await database.casa.findOne({
            where: { id: Number(id) }
        })
    return res.status(200).json(umaAgenda) }
    catch (error){
        return res.status(500).json(error.message)
    }  
  }



}
module.exports = AgendaController