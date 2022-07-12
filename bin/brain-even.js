#!/usr/bin/env node
import userName from '../src/cli.js';

console.log(`Hello ${userName}!`);

import { evenGame } from '../src/even.js';

evenGame();
