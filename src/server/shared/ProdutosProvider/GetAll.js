const Utils = require('../utils.js')

const utils = new Utils('Produtos', null)

const getAllProvider = () => {

    try {
        const produtos = utils.getProductData()
        return produtos
    } catch (error) {
        console.log(error);
        return new Error(`Erro ao consultar registros`)
    }

}

module.exports = getAllProvider