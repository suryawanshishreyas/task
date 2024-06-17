const lodash = require('lodash');
const moment = require('moment/moment');

let character = [ 'a', 'b', 'c','d'];

let chunked = lodash.chunk(character,2);

console.log(chunked);
console.log(lodash.difference([2,1],[2,3]));

let date = moment().format('MMM Do YY');
console.log(date);
let day = moment().format('D');
console.log(day);