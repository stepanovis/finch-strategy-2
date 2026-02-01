export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Funding Strategy</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 2rem; line-height: 1;">THE ASK</h1>
    
    <div style="font-family: 'Inter', sans-serif; font-size: 8rem; font-weight: 700; color: var(--color-accent); margin-bottom: 3rem; letter-spacing: -4px;">$2M</div>
    
    <div class="specs-container">
        <div class="spec-col">
            <div class="spec-label">RUNWAY</div>
            <div class="spec-val">24 MONTHS</div>
            <div class="spec-desc">Full cycle to market dominance without raising a bridge.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">ALLOCATION</div>
            <div class="spec-val">80% R&D</div>
            <div class="spec-desc">Investing in the best ML engineers to perfect the 7B Model and LoRA Plugins.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">INFRASTRUCTURE</div>
            <div class="spec-val" style="color: #666;">0%</div>
            <div class="spec-desc">No cloud waste. Every dollar builds IP, not AWS revenue.</div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem; text-align: left;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE GOAL</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            Capture the Shadow Market & Validate Federated Learning at Scale.
        </div>
    </div>
</div>

<style>
.specs-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
}
.spec-col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.spec-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: #666;
    letter-spacing: 1px;
}
.spec-val {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    text-transform: uppercase;
}
.spec-desc {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #888;
    line-height: 1.4;
}
</style>
`;