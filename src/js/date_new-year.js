const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const nowYear = new Date().getFullYear();
const NewYear = new Date(`1 Jan ${nowYear + 1} 00:00:00`);
function countDownTime() {
  const nowDate = Date.now();
  const get = NewYear - nowDate;
  

  const daysCount = Math.floor(get / 1000 / 60 / 60 / 24);
  const hoursCount = Math.floor((get / 1000 / 60 / 60) % 24);
  const minutesCount = Math.floor((get / 1000 / 60) % 60);
  const secondsCount = Math.floor((get / 1000) % 60);

  days.innerHTML = daysCount;
  hours.innerHTML = hoursCount;
  minutes.innerHTML = minutesCount;
  seconds.innerHTML = secondsCount;

};

setInterval(countDownTime, 1000);


