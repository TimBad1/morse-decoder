const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(expr) {
    let text = '';
    let words = [];

    for(let i = 0; i < expr.length; i+=2) {
        switch (`${expr[i]}${expr[i + 1]}`) {
            case '00': {text += '_'; break;}
            case '10': {text += '.'; break;}
            case '11': {text += '-'; break;}
            case '**': {text += '*'; break;}
            default: {console.log('error');}
        }
    }

    while (text.length > 0) {
        words.push(text.slice(0, 5))
        text = text.slice(5);
    }

    for(let i = 0; i < words.length; i++) {
        if(words[i] === '*****') {
            words[i] = ' ';
        }

        for(let key in MORSE_TABLE) {
            let newKey = '_____' + key;
            
            if(words[i] === newKey.slice(-5)) {
                words[i] = MORSE_TABLE[key];
                break;
            }
        }
    }
    // console.log(words.join(''));
    return words.join('');
}

// decode(expr);

module.exports = {
    decode
}