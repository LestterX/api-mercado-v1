const Utils = require('../utils.js')

const utils = new Utils('Produtos', null)

const deleteByIdProvider = (id) => {
    let erros = []

    if(!id) {
        console.log('No ID was given');
        return new Error('No ID was given')
    }

    const produtos = utils.getProductData()
    delete produtos[id]
    utils.setProductData(produtos)
}

module.exports = deleteByIdProvider