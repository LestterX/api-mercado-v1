const Utils = require('../utils.js');

const utils = new Utils('Produtos', null);

const createProvider = (data) => {

  const newProductId = Math.floor(1000 + Math.random() * 9000);
  if(!data) return new Error('Sem dados para cadastrar');
  try {
    const produtos = utils.getProductData();
    produtos[newProductId] = data;
    utils.setProductData(produtos);
  } catch (error) {
    console.log(error);
    return new Error('Erro ao criar registro');
  }

  return newProductId;

};

module.exports = createProvider;