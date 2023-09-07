const Utils = require('../utils.js');

const utils = new Utils('Produtos', null);

const deleteByIdProvider = (id) => {
    
  if(!id) {return new Error('Sem ID enviado');}
  try {
    const produtos = utils.getProductData();
    if(!produtos[id]) return new Error('O Id fornecido não existe');
    delete produtos[id];
    utils.setProductData(produtos);
  } catch (error) {
    console.log(error);
    return new Error('Erro ao apagar registro');
  }

};

module.exports = deleteByIdProvider;