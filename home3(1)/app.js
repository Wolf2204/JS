let el = document.body.querySelector('.winner');
let pet = document.querySelector('.pet'),
    vas = document.querySelector('.vas');

let sumCards = 36;
let halfCards = sumCards / 2;
let arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [];

(function deckList (...arg) {
    let number = 36;
    for (let i = 0; i < 4; i++) {

        for (let j = 1; j <= 14; j++) {
            arg[i].push({
                val: j,
                card: '&#1271' + (number + j) + ';'
            })
        }
        if(sumCards === 36){
            arg[i].splice(1, 4);
            arg[i].splice(7, 1);
        } else {
            arg[i].splice(11, 1);
        }

        arg[i][0].val +=20;
        number += 16;
    }
}(arr1, arr2, arr3, arr4));

(function colorArr (...arg) {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < arg[i].length; j++) {
            arg[i][j].color = 'red';
        }
    }
}(arr2, arr3));

console.log(arr1, arr2, arr3, arr4);
arr1.suit = 'пика';
arr2.suit = 'черви';
arr3.suit = 'бубна';
arr4.suit = 'крести';

let rand = [arr1, arr2, arr3, arr4];
let choiceSuit = rand[Math.floor(Math.random() * rand.length)];

(function createSuit (a) {
    for (let i = 0; i < a.length; i++) {
        a[i].val = a[i].val * 100;
    }
    return a;
}(choiceSuit));

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
    let e = deckPetya[i][0].val,
        f = deckVasya[i][0].val;
    if (e > f) {
        resultPetya += 1;
    } else if (e < f) {
        resultVasya += 1;
    }
}

let suit = 'Козырь: ' + choiceSuit.suit;

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
    let l = deckPetya[j][0],
        m = deckVasya[j][0];
    player1[i].innerHTML = l.card;
    player2[i].innerHTML = m.card;
    player1[i].style.color = l.color;
    player2[i].style.color = m.color;
}
