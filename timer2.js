// timer2 stretch challenge

// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point
// the program should say "Thanks for using me, ciao!" before terminating

const readline = require('readline');
const timer1 = require('./timer1');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('SIGINT', () => {
  console.log('');
  console.log('See ya later!');
  rl.close();
});


rl.question(`Press b for Beep! or enter a number between 1 & 9 for timer!`, (answer) => {
  if (answer.toLowerCase() === 'b') {
    process.stdout.write('\x07');
    process.stdout.write(' 🔊 ');
    console.log('');
  } else if (answer > 0 && answer < 10) {
    console.log(`Setting timer for ${answer} seconds...`);
    timer1(answer);
  } else {
    console.log('*** Please enter a valid input ***');
  }

  rl.close();
});

