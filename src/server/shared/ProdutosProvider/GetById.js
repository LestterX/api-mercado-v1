const Utils = require('../utils.js')
const utils = new Utils('Produtos')

const getByIdProvider = (id) => {
    
    try {
        const produtos = utils.getProductData()
        if(!produtos[id]) {
            return new Error('O Id fornecido não existe')   
        }
        return produtos[id]
    } catch (error) {
        console.log(error);
        return new Error(`Erro ao consultar registro`)
    }

}

module.exports = getByIdProvider