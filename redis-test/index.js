const redis = require('redis');

// 连接redis
const redisClient = redis.createClient(6379, '127.0.0.1');
// 必须设置
redisClient.on('error', err => {
    console.log(err);
});

// test

redisClient.set('myname', 'zhangsan', redis.print);

redisClient.get('myname', (err, val) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('val', val);

    redisClient.quit();
})