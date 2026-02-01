export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Market Validation</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE EDGE INEVITABILITY</h1>
    
    <div class="facts-grid">
        <div class="grid-item">
            <div class="grid-val">75%</div>
            <div class="grid-label">DATA ON EDGE</div>
            <div class="grid-desc">By 2025, enterprise data processing moves to the edge (Gartner).</div>
        </div>
        <div class="grid-item">
            <div class="grid-val">$124B</div>
            <div class="grid-label">ON-DEVICE MARKET</div>
            <div class="grid-desc">Projected market size by 2032 (Grand View Research).</div>
        </div>
        <div class="grid-item">
            <div class="grid-val">ZERO</div>
            <div class="grid-label">MARGINAL COST</div>
            <div class="grid-desc">You pay for electricity, not tokens. Hardware is a sunk cost.</div>
        </div>
        <div class="grid-item">
            <div class="grid-val">x2</div>
            <div class="grid-label">DENSITY GROWTH</div>
            <div class="grid-desc">Model capability density doubles every 3.5 months.</div>
        </div>
    </div>
</div>

<style>
.facts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}
.grid-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.grid-val {
    font-family: 'Inter', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-accent);
    line-height: 1;
    letter-spacing: -2px;
}
.grid-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
}
.grid-desc {
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
}
</style>
`;