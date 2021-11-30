const database = require('../models')

class AgendaController {
    static async pegaTodaAgenda(req,res){
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
        const umaAgenda = await database.agenda.findOne({
            where: { id: Number(id) }
        })
    return res.status(200).json(umaAgenda) }
    catch (error){
        return res.status(500).json(error.message)
    }  
  }

  static async criaAgendamento(req, res) {
    const novaAgenda = req.body
    try {
    const novaAgendaCriada = await database.agenda.create(novaAgenda)
    return res.status(200).json(novaAgendaCriada)
    } catch(error){
        return res.status(500).json(error.message)
    }
}

static async atualizaAgenda(req, res) {
    const { id } = req.params   
    const novasInfos = req.body
    try {
        await database.agenda.update(novasInfos,{ where: { id: Number(id) }})
        const agendaAtualizada =  await database.agenda.findOne({where: { id: Number(id) } })
        return res.status(200).json(agendaAtualizada)
    }catch(error) {
        return res.status(500).json(error.message)
    }
}

static async apagaAgendamento(req, res){
    const { id } = req.params   
    try{
        await database.agenda.destroy({where: { id: Number(id) } })
        return res.status(200).json({message: `id ${id} deletado`})
    } catch(error){
        return res.status(500).json(error.message)
    }
}

}
module.exports = AgendaController