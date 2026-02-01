// Slide imports
import { slide as slide01 } from './slides/01-title.js';
import { slide as slide02 } from './slides/02-problem-red-ocean.js';
import { slide as slide03 } from './slides/03-what-everyone-does.js';
import { slide as slide04 } from './slides/04-apple-approach.js';
import { slide as slide05 } from './slides/05-hardware-reality.js';
import { slide as slide06 } from './slides/06-models-that-work.js';
import { slide as slide07 } from './slides/07-small-beats-large.js';
import { slide as slide08 } from './slides/08-lora-magic.js';
import { slide as slide09 } from './slides/09-why-compliance.js';
import { slide as slide10 } from './slides/10-architecture.js';
import { slide as slide11 } from './slides/11-our-moat.js';
import { slide as slide12 } from './slides/12-federated-learning.js';
import { slide as slide13 } from './slides/13-google-proof.js';
import { slide as slide14 } from './slides/14-training-network.js';
import { slide as slide15 } from './slides/15-target-audience.js';
import { slide as slide16 } from './slides/16-shadow-it-gtm.js';
import { slide as slide17 } from './slides/17-path-to-enterprise.js';
import { slide as slide18 } from './slides/18-easy-entry.js';
import { slide as slide19 } from './slides/19-monetization.js';
import { slide as slide20 } from './slides/20-market-size.js';
import { slide as slide21 } from './slides/21-densing-law.js';
import { slide as slide22 } from './slides/22-hardware-roadmap.js';
import { slide as slide23 } from './slides/23-tech-breakthroughs.js';
import { slide as slide24 } from './slides/24-investor-problem.js';
import { slide as slide25 } from './slides/25-bedrock-risk.js';
import { slide as slide26 } from './slides/26-we-are-hedge.js';
import { slide as slide27 } from './slides/27-asymmetric-bet.js';
import { slide as slide28 } from './slides/28-risks.js';
import { slide as slide29 } from './slides/29-summary.js';
import { slide as slide30 } from './slides/30-ask.js';

const slides = [
    slide01, slide02, slide03, slide04, slide05,
    slide06, slide07, slide08, slide09, slide10,
    slide11, slide12, slide13, slide14, slide15,
    slide16, slide17, slide18, slide19, slide20,
    slide21, slide22, slide23, slide24, slide25,
    slide26, slide27, slide28, slide29, slide30
];

let currentSlide = 0;

const slideContainer = document.getElementById('slide-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideCounter = document.getElementById('slide-counter');
const progressBar = document.getElementById('progress');

function renderSlide(index) {
    slideContainer.innerHTML = slides[index];
    updateControls();
}

function updateControls() {
    slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
    progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        renderSlide(currentSlide);
    }
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    }
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// Initialize
renderSlide(0);
