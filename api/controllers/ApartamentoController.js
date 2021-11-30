const database = require('../models')

class ApartamentoController {
    static async pegaTodosOsApartamentos(req,res){
        try{
        const todosOsApartamentos = await database.apartamento.findAll()
        return res.status(200).json(todosOsApartamentos)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }


    static async pegaUmApartamento(req, res){
        const { id } = req.params
        try{
            const umApartamento = await database.apartamento.findOne({
                where: { id: Number(id) }
            })
        return res.status(200).json(umApartamento) }
        catch (error){
            return res.status(500).json(error.message)
        }  
    }


    static async criaApartamento(req, res) {
        const novoApartamento = req.body
        try {
        const novoApartamentoCriado = await database.apartamento.create(novoApartamento)
        return res.status(200).json(novoApartamentoCriado)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }


    static async atualizaApartamento(req, res) {
        const { id } = req.params   
        const novasInfos = req.body
        try {
            await database.apartamento.update(novasInfos,{ where: { id: Number(id) }})
            const apartamentoAtualizado =  await database.apartamento.findOne({where: { id: Number(id) } })
            return res.status(200).json(apartamentoAtualizado)
        }catch(error) {
            return res.status(500).json(error.message)
        }
    }


    static async apagaApartamento(req, res){
        const { id } = req.params   
        try{
            await database.apartamento.destroy({where: { id: Number(id) } })
            return res.status(200).json({message: `id ${id} deletado`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }


}

module.exports = ApartamentoController