const Utils = require('../utils.js')

const utils = new Utils(null, 'Vendas')

const createProvider = (data) => {

    const newSellId = Math.floor(1000 + Math.random() * 9000)
    if(!data) return new Error(`Sem dados para cadastrar`)
    try {
        const vendas = utils.getSellData()
        vendas[newSellId] = data
        utils.setSellData(vendas)
    } catch (error) {
        console.log(error);
        return new Error(`Erro ao criar registro`)
    }

    return newSellId

}

module.exports = createProvider