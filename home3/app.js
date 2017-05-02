let el = document.body.querySelector('.winner');
let pet = document.querySelector('.pet'),
    vas = document.querySelector('.vas');

let sumCards = 36;
let halfCards = sumCards / 2;
let suitLength = sumCards / 4;
let suitNumber = [0, 1, 2, 3];
let arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [];

(function deckList (...arg) {
    let deckLength = 'cards36/';
    if (sumCards === 52) {
        deckLength = 'cards52/';
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j <= suitLength; j++) {
            arg[i].push({
                val: j,
                card: deckLength + (j + suitNumber[i] * suitLength) + '.jpg'
            })
        }
    }
}(arr1, arr2, arr3, arr4));

arr1[0].suit = 'бубна';
arr2[0].suit = 'черви';
arr3[0].suit = 'пика';
arr4[0].suit = 'крести';

let rand = [arr1, arr2, arr3, arr4];
let a = rand[Math.floor(Math.random() * rand.length)];

(function choiceSuit (a) {
    for (let i = 0; i < a.length; i++) {
        a[i].val = a[i].val * 100;
    }
    return a;
}(a));

let deck = arr1.concat(arr2, arr3, arr4);
let deckPetya = [],
    deckVasya = [];

for (let i = halfCards; i > 0; i--) {
    let b = deck.splice((Math.random() * deck.length), 1);
    deckPetya.push(b);
    let c = deck.splice((Math.random() * deck.length), 1);
    deckVasya.push(c);
}

let resultPetya = 0,
    resultVasya = 0;

for (let i = halfCards - 1; i >= 0; i--) {
    let e = deckPetya[i],
        f = deckVasya[i];
    if (e[0].val > f[0].val) {
        resultPetya += 1;
    } else if (e[0].val < f[0].val) {
        resultVasya += 1;
    }
}

let suit = 'Козырь: ' + a[0].suit;

if (resultPetya > resultVasya) {
    el.textContent = 'Winner: Петя. ' + suit;
} else if (resultPetya < resultVasya) {
    el.textContent = 'Winner: Вася. ' + suit;
} else {
    el.textContent = 'Ничья. ' + suit;
}

pet.textContent = 'Петя: ' + resultPetya;
vas.textContent = 'Вася: ' + resultVasya;

let p1 = document.body.querySelector('.player1'),
    p2 = document.body.querySelector('.player2');

for (let i = 0; i < halfCards; i++) {
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    p1.appendChild(div1);
    p2.appendChild(div2);
}

let player1 = document.querySelectorAll('.player1 div'),
    player2 = document.querySelectorAll('.player2 div');

for (let i = 0, j = halfCards - 1; i < halfCards; i++, j--) {
    let o = deckPetya[j];
    let p = deckVasya[j];
    let image1 = document.createElement('img');
    image1.src = o[0].card;
    let image2 = document.createElement('img');
    image2.src = p[0].card;
    player1[i].appendChild(image1);
    player2[i].appendChild(image2);
}
