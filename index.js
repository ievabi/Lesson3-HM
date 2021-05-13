import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Input a sentence or a name: ', function(answer){
    let re = /[\W_]/g;
    let lowRegStr = answer.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    if (lowRegStr ===reverseStr){
        console.log(`${answer} is a palindrom!`)
    } else{
        console.log(`"${answer}" is NOT a palindrom!`)
    }
    rl.close();
})