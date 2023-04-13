
const ccxt = require("ccxt");

module.exports = ({exchangeName , apiKey, secret, password}) => {

    console.log(exchangeName);
    console.log(apiKey);
    console.log(secret);
    console.log(password);

    const exchangeClass = ccxt[exchangeName]

        , exchange = new exchangeClass({

            apiKey,
            secret,
            password,
            'timeout': 3000,
            'enableRateLimit': true,

        })

    exchange.options['adjustForTimeDifference'] = false


    return exchange

}
