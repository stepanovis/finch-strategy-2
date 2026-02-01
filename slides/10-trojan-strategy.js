export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Go-To-Market</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE TROJAN STRATEGY</h1>
    
    <div class="loop-container">
        <div class="loop-step">
            <div class="step-num">PHASE 1</div>
            <div class="step-content">
                <div class="step-title">INFILTRATION</div>
                <div class="step-desc">Employees install Finch to bypass bans. It solves their immediate pain safely.</div>
            </div>
        </div>
        
        <div class="loop-arrow">↓</div>
        
        <div class="loop-step">
            <div class="step-num">PHASE 2</div>
            <div class="step-content">
                <div class="step-title">DEPENDENCY</div>
                <div class="step-desc">Shadow network grows inside the bank. Finch becomes the de-facto standard.</div>
            </div>
        </div>
        
        <div class="loop-arrow">↓</div>
        
        <div class="loop-step">
            <div class="step-num">PHASE 3</div>
            <div class="step-content">
                <div class="step-title">LEGALIZATION</div>
                <div class="step-desc">We sell the "Enterprise License" to CISO to regain control over the shadow network.</div>
            </div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE EXECUTION</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            We don't ask for permission. We enter via the user, stay for the enterprise.
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
    font-size: 0.8rem;
    color: var(--color-accent);
    min-width: 60px;
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
    padding-left: 0.5rem; /* Align with step-num */
    color: #333;
    font-size: 1.5rem;
}
</style>
`;