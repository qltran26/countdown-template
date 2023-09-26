function startCountdown(durationInSeconds) {
    const countdownElement = document.getElementById('countdown');

    let remainingTime = durationInSeconds;
    const intervalId = setInterval(function () {
      const days = Math.floor(remainingTime / 86400);
      const hours = Math.floor((remainingTime % 86400) / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      const formattedTime = `${days < 10 ? '0' : ''}${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      countdownElement.textContent = formattedTime;

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        countdownElement.textContent = '00:00:00:00';
        // You can trigger any desired action here when the countdown reaches zero.
      }

      remainingTime--;
    }, 1000);
  }

  // You can change your time here
  // Start the countdown with a duration of 1 day (86400 seconds)
  startCountdown(864000);

const images = [
  './images/image1.jpg',
  './images/image2.jpg',
  './images/image3.jpg',
  './images/image4.jpg',
];

let currentIndex = 0;
const slider = document.querySelector('body');

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    const imageUrl = `url(${images[currentIndex]})`;
    slider.style.backgroundImage = imageUrl;
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Initial background image
slider.style.backgroundImage = `url(${images[currentIndex]})`;