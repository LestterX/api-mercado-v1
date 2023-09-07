const StatusCodes = require('http-status-codes');
const VendasProvider = require('../../shared/VendasProvider');

const getAll = (req, res) => {

  const data = VendasProvider.getAllProvider();

  if(data instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: data.message
    });
  }

  return res.status(StatusCodes.OK).json({
    result: data
  });
};

module.exports = getAll;