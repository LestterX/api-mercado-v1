const Utils = require('../utils')
const utils = new Utils(null, 'Vendas')

const updateByIdProvider = (data, id) => {
    
    try {
        const vendas = utils.getSellData()
        if(vendas[id] === undefined) return new Error(`O Id fornecido não existe`)
        vendas[id] = data
        utils.setSellData(vendas)
    } catch (error) {
        console.log(error);
        return new Error(`Erro ao atualizar registro`)
    }

    return id

}

module.exports = updateByIdProvider