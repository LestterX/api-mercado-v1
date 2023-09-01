const Utils = require('../utils.js')

const utils = new Utils(null, 'Vendas')

const deleteByIdProvider = (id) => {
    
    if(!id) {
        console.log('No ID was given');
        return new Error('No ID was given')
    }

    const vendas = utils.getSellData()
    delete vendas[id]
    utils.setSellData(vendas)
}

module.exports = deleteByIdProvider