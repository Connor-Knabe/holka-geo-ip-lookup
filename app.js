var geoip = require('geoip-lite');

var ip = '108.171.133.166';
var geo = geoip.lookup(ip);

console.log(geo);
