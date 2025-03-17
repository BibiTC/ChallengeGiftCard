

const card = document.querySelector('.card')

// listeners
card.onclick = () => {
card.classList.add('flip')
}

function onClick() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

function playAudio() {
  // Obtén el elemento de audio
  var audio = document.getElementById("audio");
  // Reproduce el audio
  /*audio.play();*/
  onClick();
}