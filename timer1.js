// simple timer from the command line

const input = process.argv.splice(2);

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

timer1(input);
