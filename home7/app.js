let btns = document.querySelectorAll('button');
let buttonsArray = Array.prototype.slice.call(btns);

function asyncMap(arr, fn) {
    return Promise.all(arr.map(function (v, i, a) {
        return fn(v, i, a);
    }));
}

function asyncMap1(arr, fn) {
    let promise = new Promise(resolve => resolve());
    let arr1 = [];
    arr.map(function (v, i, a) {
        promise = promise.then(function () {
            return fn(v, i, a);
        }).then(function (res) {
            arr1.push(res);
        });
    });
    return promise.then(function () {
        return arr1;
    });

}

asyncMap1(buttonsArray, function (el, i, a) {
    return elementClick(el).then(el => {
        return Date.now();
    });
}).then(function (arr) {
    console.log(arr)
});
function elementClick(el) {
    return new Promise(function (resolve) {
        el.addEventListener('click', function listener() {
            el.removeEventListener('click', listener);
            resolve(el)
        });
    })
}


