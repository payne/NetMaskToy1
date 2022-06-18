// Based on https://github.com/rs/node-netmask
var Netmask = require('netmask').Netmask

var block = new Netmask('10.0.0.0/12');
// console.log(block.contains('10.0.8.10'));
block = new Netmask('127.0.0.1/255.255.255.252');
console.log(`There are ${block.size} IP#s in the block`);