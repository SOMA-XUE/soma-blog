const { REDIS_CONF } = require('../conf');
const redis = require('redis');

// 连接redis
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
// 必须设置
redisClient.on('error', err => {
    console.log(err);
});

// test
function set(key, val) {
    redisClient.set(key, JSON.stringify(val), redis.print);
}

function get(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err);
                return;
            }

            if (key === null) {
                resolve(null);
                return;
            }

            try {
                resolve(JSON.parse(val));
            } catch(ex) {
                resolve(val);
            }
            // redisClient.quit();
        })
    })
}

module.exports = {
    set,
    get,
}
