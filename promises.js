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

// waitForMyPromise();

// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('done!');
//     }, 1500)
// }).then(res => console.log('then my other promise is', res));



// Phase 5

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))

}

// wait(2000).then(res => console.log('...'))

async function doStuff() {
    await wait(2000)
    console.log('...')
}

// doStuff()


// Phase 6

const tryRandomPromise = random => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!')
    } else {
        reject('random error')
    }
})

for (let i = 0; i < 10; i++) {
    const random = Math.random()
    wait(2000 + random*1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error))
}


// Phase 7
// using 'await'

const tryTryAgain = async (i) => {
    const random = Math.random()

    await wait(2000 + random*1000)

    try {
        const result = await tryRandomPromise(random)
        console.log('random again #', i, result)
    } catch (error) {
        console.log('random again #', i, error)
    }
}

for (let i = 0; i < 10; i++) {
    tryTryAgain(i)
}


// Phase 8


console.log('END OF PROGRAM')
