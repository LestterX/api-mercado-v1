/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const StatusCodes = require('http-status-codes');
const Utils = require('../../shared/utils');
const utils = new Utils(null, null, 'BlackListTokens');

const verifyToken = (req, res, next) =>{

  const token = req.headers['x-access-token']; //Pode ser o authorization tbm. Ou qualquer um

  const tokens = utils.getBlackListTokens();
  const tokensArray = Object.values(tokens);

  for(tok of tokensArray){
    if (token === tok) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        errors: 'Token inválido. Faça login novamente.'
      });
    }
  }

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if(error){
      return res.status(StatusCodes.UNAUTHORIZED).json({
        errors: 'Token inválido. Tente novamente, ou faça login.'
      });
    }
    //Não pode ter o RETURN, pois tem que executar o next()
    req.userId = decoded.userId; //Aparentemente cria uma variável pro request com o userId do decoded
  });

  next();
    
};

module.exports = verifyToken;