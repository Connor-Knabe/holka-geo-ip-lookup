var geoip = require('geoip-lite');

module.exports = function(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var ip = '108.171.133.166';
    var geo = geoip.lookup(ip);
    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: geo.city + 'Hello ' + (req.query.name || req.body.name)
        };
    } else {
        context.res = {
            status: 400,
            body:
                'Please pass a name on the query string or in the request body'
        };
    }
    context.done();
};
