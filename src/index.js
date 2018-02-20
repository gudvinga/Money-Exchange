module.exports = function makeExchange(currency) {
    const KEYS = ['H', 'Q', 'D', 'N', 'P'],
          COINS = { 
                H: 50,
                Q: 25,
                D: 10,
                N: 5,
                P: 1
        };

    let res = {};

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else if (currency < 1) {
        return {};
    }

    for (let i = 0; i < KEYS.length; i++) {
        res[KEYS[i]] = Math.floor(currency / COINS[KEYS[i]]);
        if (res[KEYS[i]] === 0) {delete res[KEYS[i]]};
        currency %= COINS[KEYS[i]];
    }

    return res;
}
