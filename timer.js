const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout = setTimeout(() => {
    console.log('3초 후 실행');
    clearInterval(interval)
}, 3000);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});
