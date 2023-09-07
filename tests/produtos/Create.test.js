/* eslint-disable no-undef */
const testServer = require('../jest.setup');

describe('Produtos - Create', () => {

  let token;

  beforeAll(() => {
    const resLogin = testServer
      .post('/login')
      .send({
        username: process.env.USERLOGIN,
        password: process.env.PASSLOGIN
      });

    token = resLogin.token;
  });

  console.log(token);

  it('Cria registro', () => {
    const res = testServer
      .post('/produto')
      .send({
        category: 'Bebidads',
        name: 'Ice Tea',
        size: '1 L',
        cost: 'R$10.00',
        barcode: ''
      });
    expect(res.result).toEqual('number');
  });

});