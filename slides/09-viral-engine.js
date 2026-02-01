export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">The Growth Loop</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE VIRAL ENGINE</h1>
    
    <div class="loop-container">
        <div class="loop-step">
            <div class="step-num">01</div>
            <div class="step-content">
                <div class="step-title">FREE ACCESS</div>
                <div class="step-desc">User gets Pocket Compliance AI for $0. No credit card. No API fees.</div>
            </div>
        </div>
        
        <div class="loop-arrow">↓</div>
        
        <div class="loop-step">
            <div class="step-num">02</div>
            <div class="step-content">
                <div class="step-title">DATA PAYMENT</div>
                <div class="step-desc">User pays by enabling "Federated Training". Their GPU trains our model.</div>
            </div>
        </div>
        
        <div class="loop-arrow">↓</div>
        
        <div class="loop-step">
            <div class="step-num">03</div>
            <div class="step-content">
                <div class="step-title">ZERO OPEX SCALING</div>
                <div class="step-desc">We grow without server costs. The network funds its own intelligence.</div>
            </div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE SYNERGY</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            We dump the market prices to capture the training network.
        </div>
    </div>
</div>

<style>
.loop-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding-left: 2rem;
    border-left: 1px solid #333;
}
.loop-step {
    display: flex;
    gap: 2rem;
    align-items: baseline;
}
.step-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: var(--color-accent);
}
.step-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.step-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.step-desc {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: #888;
    line-height: 1.4;
    max-width: 600px;
}
.loop-arrow {
    padding-left: 2.2rem; /* Align with step-num */
    color: #333;
    font-size: 1.5rem;
}
</style>
`;