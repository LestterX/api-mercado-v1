const VendasProvider = require('../../shared/VendasProvider');
const StatusCodes = require('http-status-codes');
const Utils = require('../../shared/utils');
const utils = new Utils(null, null, null, 'CompanyInfo');

// eslint-disable-next-line no-unused-vars
const getReceipt = (req, res) => {

  const id = req.params.id;
  const clientData = req.body;

  if (!clientData.cpf || !clientData.nome) {
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({
      errors: 'Envie o CPF e o Nome do Cliente'
    });
  }

  const venda = VendasProvider.getByIdProvider(id);

  if (venda instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: venda.message
    });
  }


  let vendaTotalCost = 0;

  for(let item of venda.items){
    vendaTotalCost = vendaTotalCost + (item.cost.replace('R$', '') * item.quantity);
  }

  const companyInfo = utils.getCompanyInfo();

  
  return res.render('receipt', {
    companyInfo,
    client: clientData,
    venda,
    vendaTotalCost,
    date: utils.getDateNow(),
    time: utils.getTimeNow()
  });

  // return res.status(StatusCodes.OK).json({
  //   result: {
  //     companyInfo,
  //     client: clientData,
  //     venda,
  //     vendaTotalCost,
  //     date: utils.getDateNow(),
  //     time: utils.getTimeNow()
  //   }
  // });

};

module.exports = getReceipt;