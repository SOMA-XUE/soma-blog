const env = process.env.NODE_ENV;
console.log('env', env);
let REDIS_CONF;

if (env === 'dev') {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
} else if (env === 'production') {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = {
    REDIS_CONF,
}