const Utils = require('../utils.js')

const utils = new Utils(null, 'Vendas')

const createProvider = (data) => {
    const vendas = utils.getSellData()
    const newSellId = Math.floor(1000 + Math.random() * 9000)

    vendas[newSellId] = data

    utils.setSellData(vendas)
    
    return newSellId
}

module.exports = createProvider