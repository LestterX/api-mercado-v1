const Utils = require('../utils.js')

const utils = new Utils(null, 'Vendas')

const getAllProvider = () => {

    try {
        const vendas = utils.getSellData()
        return vendas
    } catch (error) {
        console.log(error);
        return new Error(`Erro ao consultar registros`)
    }
    
}

module.exports = getAllProvider