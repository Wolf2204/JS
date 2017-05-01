let el = document.body.querySelector('.winner');
let pet = document.querySelector('.pet'),
    vas = document.querySelector('.vas');
let card1 = {
        suit: 'бубна',
        val: 1,
        name: '6бубей',
        card: 'cards/6бубей.jpg'
    },
    card2 = {
        val: 2,
        name: '7бубей',
        card: 'cards/7бубей.jpg'
    },
    card3 = {
        val: 3,
        name: '8бубей',
        card: 'cards/8бубей.jpg'
    },
    card4 = {
        val: 4,
        name: '9бубей',
        card: 'cards/9бубей.jpg'
    },
    card5 = {
        val: 5,
        name: '10бубей',
        card: 'cards/10бубей.jpg'
    },
    card6 = {
        val: 6,
        name: 'Валетбубей',
        card: 'cards/валетбубей.jpg'
    },
    card7 = {
        val: 7,
        name: 'Дамабубей',
        card: 'cards/дамабубей.jpg'
    },
    card8 = {
        val: 8,
        name: 'Корольбубей',
        card: 'cards/корольбубей.jpg'
    },
    card9 = {
        val: 9,
        name: 'Тузбубей',
        card: 'cards/тузбубей.jpg'
    };

let card10 = {
        suit: 'черви',
        val: 1,
        name: '6черви',
        card: 'cards/6черви.jpg'
    },
    card11 = {
        val: 2,
        name: '7черви',
        card: 'cards/7черви.jpg'
    },
    card12 = {
        val: 3,
        name: '8черви',
        card: 'cards/8черви.jpg'
    },
    card13 = {
        val: 4,
        name: '9черви',
        card: 'cards/9черви.jpg'
    },
    card14 = {
        val: 5,
        name: '10черви',
        card: 'cards/10черви.jpg'
    },
    card15 = {
        val: 6,
        name: 'Валетчерви',
        card: 'cards/валетчерви.jpg'
    },
    card16 = {
        val: 7,
        name: 'Дамачерви',
        card: 'cards/дамачерви.jpg'
    },
    card17 = {
        val: 8,
        name: 'Корольчерви',
        card: 'cards/корольчерви.jpg'
    },
    card18 = {
        val: 9,
        name: 'Тузчерви',
        card: 'cards/тузчерви.jpg'
    };

let card19 = {
        suit: 'пика',
        val: 1,
        name: '6пик',
        card: 'cards/6пик.jpg'
    },
    card20 = {
        val: 2,
        name: '7пик',
        card: 'cards/7пик.jpg'
    },
    card21 = {
        val: 3,
        name: '8пик',
        card: 'cards/8пик.jpg'
    },
    card22 = {
        val: 4,
        name: '9пик',
        card: 'cards/9пик.jpg'
    },
    card23 = {
        val: 5,
        name: '10пик',
        card: 'cards/10пик.jpg'
    },
    card24 = {
        val: 6,
        name: 'Валетпик',
        card: 'cards/валетпик.jpg'
    },
    card25 = {
        val: 7,
        name: 'Дамапик',
        card: 'cards/дамапик.jpg'
    },
    card26 = {
        val: 8,
        name: 'Корольпик',
        card: 'cards/корольпик.jpg'
    },
    card27 = {
        val: 9,
        name: 'Тузпик',
        card: 'cards/тузпик.jpg'
    };

let card28 = {
        suit: 'крести',
        val: 1,
        name: '6крести',
        card: 'cards/6крести.jpg'
    },
    card29 = {
        val: 2,
        name: '7крести',
        card: 'cards/7крести.jpg'
    },
    card30 = {
        val: 3,
        name: '8крести',
        card: 'cards/8крести.jpg'
    },
    card31 = {
        val: 4,
        name: '9крести',
        card: 'cards/9крести.jpg'
    },
    card32 = {
        val: 5,
        name: '10крести',
        card: 'cards/10крести.jpg'
    },
    card33 = {
        val: 6,
        name: 'Валеткрести',
        card: 'cards/валеткрести.jpg'
    },
    card34 = {
        val: 7,
        name: 'Дамакрести',
        card: 'cards/дамакрести.jpg'
    },
    card35 = {
        val: 8,
        name: 'Королькрести',
        card: 'cards/королькрести.jpg'
    },
    card36 = {
        val: 9,
        name: 'Тузкрести',
        card: 'cards/тузкрести.jpg'
    };


let arr1 = [card1, card2, card3, card4, card5, card6, card7, card8, card9],
    arr2 = [card10, card11, card12, card13, card14, card15, card16, card17, card18],
    arr3 = [card19, card20, card21, card22, card23, card24, card25, card26, card27],
    arr4 = [card28, card29, card30, card31, card32, card33, card34, card35, card36];

let rand = [arr1, arr2, arr3, arr4];
let a = rand[Math.floor(Math.random() * rand.length)];

(function newArr(a) {
    for (let i = 0; i < a.length; i++) {
        a[i].val = a[i].val * 10;
    }
    return a;
}(a));

let deck = arr1.concat(arr2, arr3, arr4);
let deckPetya = [],
    deckVasya = [];

for (let i = 18; i > 0; i--) {
    let b = deck.splice((Math.random() * deck.length), 1);
    deckPetya.push(b);
    let c = deck.splice((Math.random() * deck.length), 1);
    deckVasya.push(c);
}

let resultPetya = 0,
    resultVasya = 0;

for (let i = 17; i >= 0; i--) {
    let e = deckPetya[i],
        f = deckVasya[i];
    if (e[0].val > f[0].val) {
        resultPetya += 1;
    } else if (e[0].val < f[0].val) {
        resultVasya += 1;
    }

}

if (resultPetya > resultVasya) {
    el.textContent = 'Winner: Петя. ' + 'Козырь: ' + a[0].suit;
} else if (resultPetya < resultVasya) {
    el.textContent = 'Winner: Вася. ' + 'Козырь: ' + a[0].suit;
} else {
    el.textContent = 'Ничья. ' + 'Козырь: ' + a[0].suit;
}

pet.textContent = 'Петя: ' + resultPetya;
vas.textContent = 'Вася: ' + resultVasya;

let player1 = document.querySelectorAll('.player1 div'),
    player2 = document.querySelectorAll('.player2 div');

for (let i = 0, j = 17; i < 18; i++, j--) {
    let o = deckPetya[j];
    let p = deckVasya[j];
    let image1 = document.createElement('img');
    image1.src = o[0].card;
    let image2 = document.createElement('img');
    image2.src = p[0].card;
    player1[i].appendChild(image1);
    player2[i].appendChild(image2);
}
