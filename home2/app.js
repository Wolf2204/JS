//задача 2
abc('abc', 'cde', 'foo', 'bar',  function (str) {
    return str.toUpperCase();
});

function abc (...arg) {
    for (let i = 0; i < arg.length - 1; i++) {
        console.log(arg[arg.length - 1](arg[i]));
    }
}


//задача 1
let string1 = 'папа';
(function string (sting) {
    let a = sting.split('').reverse().join('');
    if (a === sting) {
        console.log(true)
    } else {
        console.log(false)
    }

}(string1));


