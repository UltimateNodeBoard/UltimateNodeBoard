// const KeyGeneratorService = require('./src/data/db/key-generator.service');

// console.log(KeyGeneratorService.generate('member'));

const bcrypt = require('bcrypt');

const plainText = 'p@assword';
const hashed = bcrypt.hashSync(plainText, 10);

console.log(hashed);