const Utils = require('../utils')
const utils = new Utils('Produtos', null)

const updateByIdProvider = (data, id) => {

    try {
        const produtos = utils.getProductData()
        console.log(produtos[id]);
        if(produtos[id] === undefined) return new Error(`O Id fornecido não existe`)
        produtos[id] = data
        utils.setProductData(produtos)
    } catch (error) {
        console.log(error);
        return new Error(`Erro ao atualizar registro`)
    }

    return id

}

module.exports = updateByIdProvider