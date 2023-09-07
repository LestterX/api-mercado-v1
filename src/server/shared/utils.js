/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

class Utils {
  constructor(prodsFileName = undefined, sellsFileName = undefined, blackListTokensFileName = undefined) {
    this.prodsFileName = prodsFileName;
    this.sellsFileName = sellsFileName;
    this.blackListTokensFileName = blackListTokensFileName;
  }
  getProductData() {
    const productData = fs.readFileSync(path.resolve(__dirname, `${this.prodsFileName}.json`));
    return JSON.parse(productData);
  }
  setProductData(data) {
    fs.writeFileSync(path.resolve(__dirname, `${this.prodsFileName}.json`), JSON.stringify(data));
  }
  getSellData(){
    const sellData = fs.readFileSync(path.resolve(__dirname, `${this.sellsFileName}.json`));
    return JSON.parse(sellData);
  }
  setSellData(data){
    fs.writeFileSync(path.resolve(__dirname, `${this.sellsFileName}.json`), JSON.stringify(data));
  }

  getBlackListTokens(){
    const blackListTokensData = fs.readFileSync(path.resolve(__dirname, `${this.blackListTokensFileName}.json`));
    return JSON.parse(blackListTokensData);
  }
  setBlackListTokens(token){
    fs.writeFileSync(path.resolve(__dirname, `${this.blackListTokensFileName}.json`), JSON.stringify(token));
  }
}

module.exports = Utils;