//Ricardo Cabret - offline version

import {p, pos, t} from './scraped';

const v = ":";

const r = (x) => {
    let lastPosition;
    for (let i = 0; i < x; i++) {
        let dot = '';
        for (let j = 0; j < i + 1; j++) {
            dot += ' ';
            if (j === i) {
                setTimeout(()=> {
                    console.log(dot + v);
                }, j*0.005)
            }
        }

        lastPosition = x;
    }

    console.log(getPositionSpace(lastPosition) + 'end');
};

const getPositionSpace = (x) =>{
    let space = '';
    for (let j = 0; j < x; j++) {
        space += ' ';
    }
    return space;
};

r(50);

const getTweet = (hashtag) => {
    const i = Math.floor(Math.random() * t.length);
    return t[i];
};

const getPosPhrase = (x) => {
    let p;
    if (x) {
        p = `Por ${pos[Math.floor(Math.random() * pos.length)]
            .toLowerCase()
            .replace('es violencia', '')}`;
    } else {
        p = pos[Math.floor(Math.random() * pos.length)];
    }
    return p
};

const cap = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const crearIndices = () => {
    let arr = [];
    do {
        let a = Math.floor(Math.random() * p.length);

        if (!arr.includes(a) || !arr.length) {
            arr.push(a);
        }
    }
    while (arr.length < 4);
    return arr;
};

const init = () => {
    let i = 0;
    let interval = setInterval(() => {
        if ((i % 3) === 0) {
            let rB = Math.random() >= 0.5;
            console.log(getPosPhrase(rB));
        } else if ((i % 25) === 0) {
            console.log(getTweet('#rickyrenuncia'));
        } else {
            const a = crearIndices();
            console.log(
                `${cap(p[a[0]])} ${p[a[1]]} ${p[a[2]]} ${p[a[3]]}`);
        }
        i++;

        if (i > 5000) {
            clearInterval(interval);
        }
    }, 400);
};

const initProgram = () => {
    console.log('\n');
    console.log('Ricky tu querias un Puerto Rico tech');
    setTimeout(() => {
        console.log('Aqui te regalo este script para ti y tus panitas, #rickyrenuncia');
    }, 1000);
    setTimeout(() => {
        console.log('\n\n\n');
        init();
    }, 2500);
};

initProgram();


