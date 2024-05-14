function timer() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  const daysElem = document.querySelector('#days');
  const hoursElem = document.querySelector('#hours');
  const minutesElem = document.querySelector('#minutes');
  const secondsElem = document.querySelector('#seconds');

  let timerInterval;

  function updateTimer() {
    const now = new Date();

    const timeDiff = endDate - now;

    if(timeDiff <= 0) {
      daysElem.innerText = '0';
      hoursElem.innerText = '0';
      minutesElem.innerText = '0';
      secondsElem.innerText = '0';

      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    daysElem.innerText = days < 10 ? `0${days}` : days;
    hoursElem.innerText = hours < 10 ? `0${hours}` : hours;
    minutesElem.innerText = minutes < 10 ? `0${minutes}` : minutes;
    secondsElem.innerText = seconds < 10 ? `0${seconds}` : seconds;
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

export default timer;