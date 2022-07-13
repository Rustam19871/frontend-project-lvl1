// Определение функции запроса имени
const getName = () => readlineSync.question('May I have your name?');
const userName = getName();

// Определение функции приветствия
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

// Определение функции, дающее рандомное целое число
const getRandomInt = (max) => Math.floor(Math.random() * max);

// Определение функции игры на четность
// eslint-disable-next-line consistent-return
export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');
    const checking1 = (number % 2 === 0) && (answerUser === 'yes');
    const checking2 = (number % 2 !== 0) && (answerUser === 'no');
    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser === 'yes' ? 'no' : 'yes');
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${opposite}'. /n Let's try again, ${userName}!`;
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
