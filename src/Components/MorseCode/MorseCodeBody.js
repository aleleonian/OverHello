import * as React from 'react';
import { Body } from '../Body';
import { MorseCode } from './MorseCode';
import Typography from '@mui/material/Typography';

function MorseCodeBodyContent({ data }) {

    const morseCodeAlphabet = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
        'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
        'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
        'y': '-.--', 'z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '0': '-----',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.',
        ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
        '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };
    let userName = data.name.toLowerCase().split("");
    let translatedName = "";
    userName.forEach(character => {
        translatedName += morseCodeAlphabet[character] + " ";
    });
    translatedName.trimEnd();

    return (
        <React.Fragment>
            <Typography variant="h3" gutterBottom>
                {translatedName}
            </Typography>
            <MorseCode videoUrl={`${process.env.REACT_APP_BACKEND_SERVER}/videos/${data.name.toLowerCase()}`}></MorseCode> <br />
        </React.Fragment>
    );
}

export function MorseCodeBody({ data }) {
    return (
        <Body>
            <MorseCodeBodyContent data={data} />
        </Body>
    )
}