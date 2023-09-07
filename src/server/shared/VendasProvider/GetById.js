const Utils = require('../utils.js');
const utils = new Utils(null, 'Vendas');

const getByIdProvider = (id) => {

  try {
    const vendas = utils.getSellData();
    if(!vendas[id]) {
      return new Error('O Id fornecido não existe');   
    }
    return vendas[id];
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar registro');
  }
    
};

module.exports = getByIdProvider;