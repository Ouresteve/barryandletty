const overlay = document.getElementById("startOverlay");
const music = document.getElementById("bgMusic");
const video = document.getElementById("loveVideo");

let musicStarted = false;

overlay.addEventListener("click", () => {
  overlay.style.opacity = 0;
  setTimeout(() => overlay.remove(), 800);

  music.volume = 0;
  music.play();
  fadeIn(music);
  musicStarted = true;
});

// Fade helpers stay the same
video.addEventListener("pause", () => {
  if (!video.ended) {
    music.play();
    fadeIn(music);
  }
});

// Fade helpers
function fadeIn(audio) {
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.25) {
      v += 0.01;
      audio.volume = v;
    } else clearInterval(fade);
  }, 100);
}

function fadeOut(audio) {
  const fade = setInterval(() => {
    if (audio.volume > 0.01) {
      audio.volume -= 0.01;
    } else {
      audio.pause();
      clearInterval(fade);
    }
  }, 100);
}

// Video overrides music
video.addEventListener("play", () => fadeOut(music));
video.addEventListener("ended", () => {
  music.play();
  fadeIn(music);
});

// 🌸 Love Rain Generator
const rain = document.querySelector(".love-rain");
const symbols = ["🌸", "🌹", "💖", "💐"];

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 5 + Math.random() * 5 + "s";
  span.style.opacity = Math.random();
  rain.appendChild(span);

  setTimeout(() => span.remove(), 10000);
}, 300);
