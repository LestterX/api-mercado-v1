const Utils = require('../utils.js');

const utils = new Utils(null, 'Vendas');

const deleteByIdProvider = (id) => {
    
  if(!id) {return new Error('Sem ID enviado');}

  try {
    const vendas = utils.getSellData();
    if(!vendas[id]) return new Error('O Id fornecido não existe');
    delete vendas[id];
    utils.setSellData(vendas);
  } catch (error) {
    console.log(error);
    return new Error('Erro ao apagar registro');
  }
};

module.exports = deleteByIdProvider;