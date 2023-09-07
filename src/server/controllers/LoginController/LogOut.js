const Utils = require('../../shared/utils');
const utils = new Utils(null, null, 'BlackListTokens');
const StatusCodes = require('http-status-codes');

const logOut = (req, res) => {

  const token = req.headers['x-access-token'];

  let tokens = utils.getBlackListTokens();

  if (Object.values(tokens).length >= 10) tokens = {};

  let newTokenId = Math.floor(10000 + Math.random() * 90000);
  if (tokens[newTokenId]) {
    newTokenId = Math.floor(1000 + Math.random() * 9000);
  }

  tokens[newTokenId] = token;

  utils.setBlackListTokens(tokens);

  return res.status(StatusCodes.OK).json({
    result: 'LogOut efetuado com sucesso'
  });

};

module.exports = logOut;