/* eslint-disable no-undef */
const server = require('../src/server/server');
const supertest = require('supertest');

beforeAll(() => {
  console.log('Iniciando Testes');
});

afterAll(() => {
  console.log(('Tests finalizados'));
});

const testServer = supertest(server);

module.exports = testServer;