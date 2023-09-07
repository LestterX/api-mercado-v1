const StatusCodes = require('http-status-codes');
const VendasProvider = require('../../shared/VendasProvider');

const create = (req, res) => {
  const data = req.body;

  const createId = VendasProvider.createProvider(data);

  if (createId instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: createId.message
    });
  }
    
  return res.status(StatusCodes.CREATED).json({
    result: createId
  });
};

module.exports = create;