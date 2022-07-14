#!/usr/bin/env node

import userName from '../src/cli.js';

import { evenGame } from '../src/even.js';

console.log(`Hello ${userName}!`);

evenGame();
