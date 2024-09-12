class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.timerElement = document.querySelector(selector);
      this.targetDate = targetDate;
      this.daysSpan = this.timerElement.querySelector('[data-value="days"]');
      this.hoursSpan = this.timerElement.querySelector('[data-value="hours"]');
      this.minsSpan = this.timerElement.querySelector('[data-value="mins"]');
      this.secsSpan = this.timerElement.querySelector('[data-value="secs"]');
      
      this.start();
    }
  
    start() {
      this.updateTimer();
  
      this.intervalId = setInterval(() => {
        this.updateTimer();
      }, 1000);
    }
  
    updateTimer() {
      const currentTime = new Date();
      const time = this.targetDate - currentTime;
  
      if (time >= 0) {
        const days = this.getDays(time);
        const hours = this.getHours(time);
        const mins = this.getMinutes(time);
        const secs = this.getSeconds(time);
  
        this.updateUI(days, hours, mins, secs);
      } else {
        clearInterval(this.intervalId);
      }
    }
  
    updateUI(days, hours, mins, secs) {
      this.daysSpan.textContent = days;
      this.hoursSpan.textContent = hours.toString().padStart(2, '0');
      this.minsSpan.textContent = mins.toString().padStart(2, '0');
      this.secsSpan.textContent = secs.toString().padStart(2, '0');
    }
  
    getDays(time) {
      return Math.floor(time / (1000 * 60 * 60 * 24));
    }
  
    getHours(time) {
      return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }
  
    getMinutes(time) {
      return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    }
  
    getSeconds(time) {
      return Math.floor((time % (1000 * 60)) / 1000);
    }
  }
  
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });
