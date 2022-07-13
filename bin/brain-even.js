#!/usr/bin/env node
import userName from '../src/cli.js';

// eslint-disable-next-line import/named
import { evenGame } from '../src/even.js';

console.log(`Hello ${userName}!`);

evenGame();
