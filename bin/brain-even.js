#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

// eslint-disable-next-line import/named
import { evenGame } from '../src/even.js';

evenGame();
