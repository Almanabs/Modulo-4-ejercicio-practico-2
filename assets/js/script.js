class Timer {
  constructor() {
    this.startTime = new Date();
  }

  showElapsedTime() {
    let currentTime = new Date();
    let elapsedTime = currentTime - this.startTime;
    let elapsedSeconds = Math.floor(elapsedTime / 1000);
    let elapsedMinutes = Math.floor(elapsedSeconds / 60);
    elapsedSeconds = elapsedSeconds % 60;
    console.log(`Elapsed Time: ${elapsedMinutes} minutes, ${elapsedSeconds} seconds`);
  }

  reset() {
    this.startTime = new Date();
  }
}

let timer = new Timer();





class Sum {
    constructor(base) {
      this.base = base;
      this.current = base;
      this.sum = base;
      console.log(`Base: ${this.base}`);
    }
  
    sumar() {
      this.current++;
      this.sum += this.current;
      console.log(`Current: ${this.current}`);
      console.log(`Sum: ${this.sum}`);
    }
  }
  
  let base = Math.floor(Math.random() * 10) + 1;
  let sumatoria = new Sum(base);
  
 
  