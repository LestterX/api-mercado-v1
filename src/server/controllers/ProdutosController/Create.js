const StatusCodes = require('http-status-codes');
const ProdutosProvider = require('../../shared/ProdutosProvider');

const create = (req, res) => {

  const data = req.body;
  const barcode = String(10000000000 + Math.random() * 90000000000);


  if (data.barcode === '') data.barcode = barcode;

  const produtoId = ProdutosProvider.createProvider(data);

  if (produtoId instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: produtoId.message
    });
  }

  return res.status(StatusCodes.CREATED).json({
    result: produtoId
  });

};

module.exports = create;