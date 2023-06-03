import figlet from 'figlet';
import centerAlign from 'center-align';
import chalk from 'chalk';

const log = console.log;


export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function centerText(text, terminalWidth) {
    const textLength = text.length;
    const leftPadding = Math.floor((terminalWidth - textLength) / 2);
    const rightPadding = Math.ceil((terminalWidth - textLength) / 2);
    const centeredText = ' '.repeat(leftPadding) + text + ' '.repeat(rightPadding);
    return centeredText;
};

export function createWordArt(text) {
    const asciiArt = figlet.textSync(text);
    const centeredAsciiArt = centerAlign(asciiArt, process.stdout.columns || 80);
    const coloredAsciiArt = chalk.yellow.bold(centeredAsciiArt);
    log(coloredAsciiArt);
}