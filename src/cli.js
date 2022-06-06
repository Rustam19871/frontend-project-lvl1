import readlineSync from 'readline-sync';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

export default userName;
