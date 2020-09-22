// simple timer from the command line

//takes input from the command line (1 2 4 10)
const input = process.argv.splice(2);

//plays a sound and prints a symbol for each input
const timer1 = (seconds) => {
  
  for (let i = 0; i < seconds.length; i++) {
    if (seconds[i] > 0) {
      let delay = seconds[i] * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write(' 🔊 ');
        if (i === seconds.length - 1) {
          console.log();
        }
      }, delay);
    }
  }
};

module.exports = timer1;

timer1(input);
