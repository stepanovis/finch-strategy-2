import { createElement } from './core/dom.js';

// Slide imports
import { slide as slide01 } from '../slides/01-title.js';
import { slide as slide02 } from '../slides/02-problem-red-ocean.js';
import { slide as slide02b } from '../slides/02-b-red-ocean.js';
import { slide as slide03 } from '../slides/03-what-everyone-does.js';
import { slide as slide03b } from '../slides/03-b-question.js';
import { slide as slide04 } from '../slides/04-apple-approach.js';
import { slide as slide04b } from '../slides/04-b-facts-intro.js';
import { slide as slide04c } from '../slides/04-c-fact-behavior.js';
import { slide as slide04d } from '../slides/04-d-apple-gambit.js';
import { slide as slide06fl } from '../slides/06-federated-learning-proof.js';
import { slide as slide06b } from '../slides/06-b-edge-inevitability.js';
import { slide as slide06void } from '../slides/06-c-compliance-void.js';
import { slide as slide06c } from '../slides/06-c-winning-formula.js';
import { slide as slide05 } from '../slides/05-hardware-reality.js';
import { slide as slide06 } from '../slides/06-models-that-work.js';
import { slide as slide07 } from '../slides/07-core-infrastructure.js'; // Removed from array but file exists
import { slide as slide08 } from '../slides/08-tech-trinity.js';
import { slide as slide09 } from '../slides/09-viral-engine.js';
import { slide as slide10 } from '../slides/10-trojan-strategy.js';
import { slide as slide10b } from '../slides/10-b-enterprise-upgrade.js';
import { slide as slide11 } from '../slides/11-capital-efficiency.js';
import { slide as slide11b } from '../slides/11-b-product-strategy.js';
import { slide as slide13 } from '../slides/13-the-hedge.js';
import { slide as slide14 } from '../slides/14-the-ask.js';

const slides = [
    slide01, slide02, slide02b, // Problem
    slide03b, // Question (How to win?)
    slide04b, // Let's look at facts
    slide04c, // Fact 1: Behavior (Shadow + MSFT)
    slide05, // Fact 2: Small Beats Large
    slide04d, // Fact 3: Apple Gambit (Merged)
    slide06fl, // Fact 4: Federated Learning
    slide06b, // Fact 5: Edge Inevitability
    slide06void, // Fact 6: Compliance Void
    slide06c, // The Winning Formula (Summary)
    slide06, // Solution: Finch (The Safe Pocket AI)
    slide08, // Best Model (Tech Asset)
    slide09, // Viral Engine (Economics)
    slide10, // Trojan Strategy (GTM)
    slide11, // Capital Efficiency (The Ask logic)
    slide11b, // Product Strategy (Copy vs Innovate)
    slide10b, // Enterprise Strategy (From Pocket to Enterprise)
    slide13, // The Hedge (Investment Thesis)
    slide14, // The Ask ($2M)
];

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const fragment = document.createDocumentFragment();

    slides.forEach((slideContent, index) => {
        const section = createElement('section', ['slide-section'], []);
        // Create a wrapper for centering and sizing
        section.innerHTML = slideContent;
        fragment.appendChild(section);
    });

    root.innerHTML = '';
    root.appendChild(fragment);
});
