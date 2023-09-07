const StatusCodes = require('http-status-codes');
const VendasProvider = require('../../shared/VendasProvider');

const deleteById = (req, res) => {

  const deleteByIdProvider = VendasProvider.deleteByIdProvider(req.params.id);

  if (deleteByIdProvider instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: deleteByIdProvider.message
    });
  }

  return res.status(StatusCodes.NO_CONTENT).send();

};

module.exports = deleteById;