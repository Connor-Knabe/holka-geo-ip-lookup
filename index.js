var geoip = require('geoip-lite');

var ip = '108.171.133.166';
var geo = geoip.lookup(ip);

// console.log(geo.region);
// console.log(geo.city);
module.exports = function(context, data) {
    context.log(`calling with data ${data}`);
    context.res = geo.city;
};
