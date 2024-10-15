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

function decode(expr) {
    let letters = [];
    let residualExpression = expr;
    let result = '';

    while (residualExpression !== '') {
        letters.push(residualExpression.slice(0, 10));
        residualExpression = residualExpression.slice(10);
    }

    for (let letter of letters) {
        if (letter === '**********') {
            result += ' ';
        } else {
            let residualLetter = letter;
            let morseLetter = '';

            while (residualLetter !== '') {
                if (residualLetter.slice(0, 2) === '10') {
                    morseLetter += '.';
                } else if (residualLetter.slice(0, 2) === '11') {
                    morseLetter += '-';
                } else if (residualLetter.slice(0, 2) === '00') {
                    morseLetter += '';
                }

                residualLetter = residualLetter.slice(2);
            }

            result += MORSE_TABLE[morseLetter];
        }
    }
    return result;
}
     
module.exports = {
    decode
}