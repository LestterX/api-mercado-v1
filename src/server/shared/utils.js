/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

class Utils {
  constructor(prodsFileName = undefined, sellsFileName = undefined, blackListTokensFileName = undefined, companyInfoFileName = undefined) {
    this.prodsFileName = prodsFileName;
    this.sellsFileName = sellsFileName;
    this.blackListTokensFileName = blackListTokensFileName;
    this.companyInfoFileName = companyInfoFileName;
  }
  getDateNow() {
    const date = new Date();
    const month = date.getMonth();
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return `${date.getDate()}/${months[month]}/${date.getFullYear()}`;
  }
  getTimeNow() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  getProductData() {
    const productData = fs.readFileSync(path.resolve(__dirname, `${this.prodsFileName}.json`));
    return JSON.parse(productData);
  }
  setProductData(data) {
    fs.writeFileSync(path.resolve(__dirname, `${this.prodsFileName}.json`), JSON.stringify(data));
  }
  getSellData() {
    const sellData = fs.readFileSync(path.resolve(__dirname, `${this.sellsFileName}.json`));
    return JSON.parse(sellData);
  }
  setSellData(data) {
    fs.writeFileSync(path.resolve(__dirname, `${this.sellsFileName}.json`), JSON.stringify(data));
  }

  getBlackListTokens() {
    const blackListTokensData = fs.readFileSync(path.resolve(__dirname, `${this.blackListTokensFileName}.json`));
    return JSON.parse(blackListTokensData);
  }
  setBlackListTokens(token) {
    fs.writeFileSync(path.resolve(__dirname, `${this.blackListTokensFileName}.json`), JSON.stringify(token));
  }

  getCompanyInfo() {
    const info = fs.readFileSync(path.resolve(__dirname, `${this.companyInfoFileName}.json`));
    return JSON.parse(info);
  }
}

module.exports = Utils;