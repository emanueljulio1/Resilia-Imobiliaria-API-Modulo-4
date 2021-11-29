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


    static async pegaUmaCasa(req, res){
        const { id } = req.params
        try{
            const umaCasa = await database.casa.findOne({
                where: { id: Number(id) }
            })
        return res.status(200).json(umaCasa) }
        catch (error){
            return res.status(500).json(error.message)
        }  
    }


    static async criaCasa(req, res) {
        const novaCasa = req.body
        try {
        const novaCasaCriada = await database.casa.create(novaCasa)
        return res.status(200).json(novaCasaCriada)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }


    static async atualizaCasa(req, res) {
        const { id } = req.params   
        const novasInfos = req.body
        try {
            await database.casa.update(novasInfos,{ where: { id: Number(id) }})
            const casaAtualizada =  await database.casa.findOne({where: { id: Number(id) } })
            return res.status(200).json(casaAtualizada)
        }catch(error) {
            return res.status(500).json(error.message)
        }
    }


    static async apagaCasa(req, res){
        const { id } = req.params   
        try{
            await database.casa.destroy({where: { id: Number(id) } })
            return res.status(200).json({message: `id ${id} deletado`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }


}

module.exports = CasaController