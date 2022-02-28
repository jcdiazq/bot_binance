const axios = require('axios');
const querystring = require('querystring');

async function callPublicApi(path, data, method='GET'){
    try {
        const queryString = data ? `?${querystring.stringify(data)}` : '';
        const result = await axios(
            {
                method,
                url: `${process.env.API_URL}${path}${queryString}`
            }
        )
        return result.data;
    } catch (err) {
        console.log(err);
    }
}

async function time(){
    return callPublicApi('/v3/time');
}

async function depth(symbol = 'BTCUSDT', limit = 5){
    return callPublicApi('/v3/depth', {symbol, limit});
}

async function price(symbol = 'BTCUSDT'){
    return callPublicApi('/v3/ticker/price', {symbol});
}

async function trades(symbol = 'BTCUSDT'){
    return callPublicApi('/v3/aggTrades', {symbol});
}

module.exports = { time, depth, price, trades }