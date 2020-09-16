function num1() {
    return 1;
}

async function num2() {
    return 2;
}

// console.log('num1', num1());
// console.log('num2', num2());

// num2().then(res => console.log(res));

async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}

// waiting();

async function waitForMyPromise() {
    const nPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    });
    const res = await nPromise;
    console.log('my promise is', res);
}

waitForMyPromise();

new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(res => console.log('then my other promise is', res));
