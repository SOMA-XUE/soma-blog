const {get, set} = require('./src/db/redis.js');

set('myname', 'lisi');
get('myname').then(res => {
    console.log(res)
})