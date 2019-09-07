//Ricardo Cabret

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

const p = [
    'se acabo el truquito de ir a la iglesia',
    'cabron',
    'largate',
    'pal carajo',
    'Ricardo Rossello',
    'vete',
    'vete',
    'renuncia',
    'necio',
    'ignorante',
    'eres',
    'mamon',
    'no vales na',
    'Ricky',
    'tu',
    'no nos van a coger de pendejo',
    'sabemo lo tuyo',
    'te jodiste',
    'estas bien jodio',
    'cabron',
    'se te acabo el guiso papo',
    'no tienes cerebro',
    'abusador',
    'el pueblo sabe',
    'no te queremos',
    'Puerto Rico no se quita',
    'no aguantamos mas abuso',
    'te tienes que ir ya',
    'esta generación no se quita',
    'esta es nuestra isla',
];

const t = [
    'PR your determination is inspiring',
    'A remarkable testament to the creativity, resilience & power of the people of Puerto Rico',
    'PR deserves a government that serves them',
    'colonialism is poison but one day we’ll be free ',
    'I can’t separate personal from the duty of fighting for my island, my home',
    'You are trash Ricky',
    'Hawai’i and Puerto Rico, both with history of abuse by U.S',
    '¡¡¡Cuanto amo a mi gente!!!',
    'Puerto Ricans all the way @ #Tomorrowland asking Governor @ricardorossello to RESIGN',
    'Rain or shine, people are still protesting in front of la Fortaleza in Old San Juan',
];

const pos = [
    'A remarkable testament to the creativity, resilience & power of the people of Puerto Rico',
    'La malversación de fondos es violencia',
    'la misoginia es violencia',
    'El cierre de escuelas es violencias',
    'Quedarnos sin retiro es violencia',
    'La eliminación de pensiones es violencia',
    'La corrupción es violencia',
    'El machismo es violencia',
    'El sexismo es violencia',
    'El panismo es violencia',
    'La inacción es violencia',
    'La aporofobia es violencia',
    'La homofobia es violencia',
    'El oportunismo es violencia',
    'El abuso de poder es violencia',
    'Alteración de datos es violencia',
    'La venta de playas es violencia',
    'Quitarle fondos a la UPR es violencia',
    'La conspiración es violencia',
    'La hipocresía es violencia',
    'La desigualdad es violencia',
    'La transfobia es violencia',
    'La falta de empatía es violencia',
    'El privilegio es violencia',
    'La privatización es violencia',
    'La Junta es violencia',
    'No auditar la deuda es violencia',
    'La soberbia es violencia',
    'Las cenizas de Peñuelas es violencia',
    'La prepotencia es violencia',
    'La negligencia es violencia',
    'La ineptitud es violencia',
    'Manipular la información es violencia',
    'Silenciar la prensa es violencia',
    '40 años de IVU es violencia',
    'Aguantar los vagones es violencia',
    'El fundamentalismo religioso es violencia',
    'El estado es violencia',
    'La impotencia es violencia',
    'La incertidumbre es violencia',
    'El status quo es violencia',
    'El cansancio es violencia',
    'La indiferencia es violencia',
    'La reforma laboral es violencia',
    'Los policías sin identificación son violencia',
    'El carpeteo es violencia',
    'Tirarle gas a un pueblo harto es violencia',
    'Ignorar el reclamo de un pueblo es violencia',
    'Trivializar los muertos por María es violencia',
    'Burlarse del pueblo es violencia',
    'La violencia del gobierno genera violencia',
];

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


