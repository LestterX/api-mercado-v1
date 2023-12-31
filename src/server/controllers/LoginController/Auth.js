/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const StatusCodes = require('http-status-codes');

let userId = 1;

const auth = (req, res) => {

  if (req.body.username === process.env.USERLOGIN &&
    req.body.password === process.env.PASSLOGIN) {
    try {
      const token = jwt.sign({ userId: userId }, process.env.SECRET_KEY, { expiresIn: 2600 }); //2600 === 1h || 900 === 15min
      userId++;
      return res.status(StatusCodes.OK).json({
        auth: true,
        token,
        userId: userId
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: 'Erro ao fazer login, tente novamente.'
      });
    }
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: 'Usuário ou Senha incorretos, tente novamente.'
  });

};

module.exports = auth;