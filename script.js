const enterButton = document.getElementById('enterButton');
const secretCodeInput = document.getElementById('secretCode');
const codeContainer = document.getElementById('codeContainer');
const messageContainer = document.getElementById('messageContainer');
const nextButton = document.getElementById('nextButton');
const questionContainer = document.getElementById('questionContainer');
const questionText = document.getElementById('questionText');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const photoShowcase = document.getElementById('photoShowcase');
const errorMsg = document.getElementById('errorMsg');

let noClickCount = 0;
const noMessages = [
  "Are you sure? Try again 😜",
  "C'mon, you know you want to 💖",
  "Don't be shy 😏",
  "Pretty please? 🥺",
  "You can’t say no forever 😘"
];

// --- Code verification ---
enterButton.addEventListener('click', () => {
  const code = secretCodeInput.value.trim();
  if (code.toLowerCase() === "macey") {
    codeContainer.classList.add('fade-out');
    setTimeout(() => {
      codeContainer.style.display = 'none';
      messageContainer.classList.remove('hidden');
      messageContainer.classList.add('fade-in');
    }, 800);
  } else {
    errorMsg.classList.remove('hidden');
    errorMsg.classList.remove('fade-in');
    void errorMsg.offsetWidth;
    errorMsg.classList.add('fade-in');

    secretCodeInput.classList.remove('input-shake');
    void secretCodeInput.offsetWidth;
    secretCodeInput.classList.add('input-shake');
  }
});

// allow Enter key to submit code
secretCodeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') enterButton.click();
});

// --- Transition to question ---
nextButton.addEventListener('click', () => {
  messageContainer.classList.add('fade-out');
  setTimeout(() => {
    messageContainer.style.display = 'none';
    questionContainer.classList.remove('hidden');
    questionContainer.classList.add('fade-in');
  }, 800);
});

// --- Yes button triggers photo animation ---
yesButton.addEventListener('click', () => {
  questionText.textContent = "Yay, thank you lovelove for saying yes 💕";
  yesButton.style.display = 'none';
  noButton.style.display = 'none';

  // keep visible for 2 seconds, then fade out and start showcase
  setTimeout(() => {
    questionContainer.classList.add('fade-out');
    setTimeout(() => {
      questionContainer.style.display = 'none';
      startPhotoShowcase();
    }, 800);
  }, 2000);
});

// --- No button fun messages ---
noButton.addEventListener('click', () => {
  noClickCount++;
  const nextMessage = noMessages[noClickCount % noMessages.length];
  questionText.textContent = nextMessage;
});

// --- Function to start photo animation ---
function startPhotoShowcase() {
  photoShowcase.classList.remove('hidden');

  const imagePaths = [
    "images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg",
    "images/pic6.jpg", "images/pic7.jpg", "images/pic8.jpg", "images/pic9.jpg", "images/pic10.jpg",
    "images/pic11.jpg", "images/pic12.jpg", "images/pic13.jpg", "images/pic14.jpg", "images/pic15.jpg",
    "images/pic16.jpg", "images/pic17.jpg", "images/pic18.jpg", "images/pic19.jpg", "images/pic20.jpg"
  ];

  for (let i = imagePaths.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagePaths[i], imagePaths[j]] = [imagePaths[j], imagePaths[i]];
  }

  let idx = 0;
  const batchSize = 2;
  const batchInterval = 1000;

  if (photoShowcase.dataset.started === "true") return;
  photoShowcase.dataset.started = "true";

  const launcher = setInterval(() => {
    for (let b = 0; b < batchSize && idx < imagePaths.length; b++, idx++) {
      const src = imagePaths[idx];
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("floating-photo");
      img.style.left = (10 + Math.random() * 80) + "%";
      img.style.animationDelay = (Math.random() * 0.2) + "s";
      img.style.animationDuration = (12 + Math.random() * 6) + "s";
      img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
      photoShowcase.appendChild(img);

      const removeAfter = parseFloat(img.style.animationDuration) * 1000 + 1000;
      setTimeout(() => {
        if (img && img.parentNode) img.parentNode.removeChild(img);
      }, removeAfter);
    }

    if (idx >= imagePaths.length) {
      clearInterval(launcher);
    }
  }, batchInterval);
}

const letterPopup = document.getElementById('letterPopup');
const clickInvite = document.getElementById('clickInvite');
const unfoldedLetter = document.getElementById('unfoldedLetter');
const letterMessage = document.getElementById('letterMessage');

// Show folded letter after photo showcase ends
function showFoldedLetter() {
  letterPopup.classList.remove('hidden');
}

// Modify startPhotoShowcase to trigger folded letter after photos
function startPhotoShowcase() {
  photoShowcase.classList.remove('hidden');

  const imagePaths = [
    "images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg",
    "images/pic6.jpg", "images/pic7.jpg", "images/pic8.jpg", "images/pic9.jpg", "images/pic10.jpg",
    "images/pic11.jpg", "images/pic12.jpg", "images/pic13.jpg", "images/pic14.jpg", "images/pic15.jpg",
    "images/pic16.jpg", "images/pic17.jpg", "images/pic18.jpg", "images/pic19.jpg", "images/pic20.jpg"
  ];

  for (let i = imagePaths.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagePaths[i], imagePaths[j]] = [imagePaths[j], imagePaths[i]];
  }

  let idx = 0;
  const batchSize = 2;
  const batchInterval = 1000;

  if (photoShowcase.dataset.started === "true") return;
  photoShowcase.dataset.started = "true";

  const launcher = setInterval(() => {
    for (let b = 0; b < batchSize && idx < imagePaths.length; b++, idx++) {
      const src = imagePaths[idx];
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("floating-photo");
      img.style.left = (10 + Math.random() * 80) + "%";
      img.style.animationDelay = (Math.random() * 0.2) + "s";
      img.style.animationDuration = (12 + Math.random() * 6) + "s";
      img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
      photoShowcase.appendChild(img);

      const removeAfter = parseFloat(img.style.animationDuration) * 1000 + 1000;
      setTimeout(() => {
        if (img && img.parentNode) img.parentNode.removeChild(img);
      }, removeAfter);
    }

    if (idx >= imagePaths.length) {
      clearInterval(launcher);
      setTimeout(showFoldedLetter, 1000); // show folded letter after photos
    }
  }, batchInterval);
}

// Click to unfold letter
clickInvite.addEventListener('click', () => {
  letterPopup.classList.add('hidden');
  unfoldedLetter.classList.remove('hidden');

  // You can insert your custom message here
  letterMessage.innerHTML = `
    My love, thank you for being the light in my life. This letter is just a small piece of the joy you bring me every day. I hope this surprise made you smile. I can't wait to share more beautiful moments with you. 💖
  `;
});
