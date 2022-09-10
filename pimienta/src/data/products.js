const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname,'productsData.json'),'utf-8');
const dataParse = JSON.parse(data);

module.exports = dataParse