export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Financial Model</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">CAPITAL EFFICIENCY</h1>
    
    <div class="specs-container">
        <div class="spec-col">
            <div class="spec-label">COST STRUCTURE</div>
            <div class="spec-val">ZERO INFRA<br>SCALING</div>
            <div class="spec-desc">We pay $0 for inference. Users pay for compute via their own devices.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">BURN RATE</div>
            <div class="spec-val">PREDICTABLE<br>& FIXED</div>
            <div class="spec-desc">Investment goes to R&D (Intelligence) and Marketing. No variable cloud costs.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">THE ASK</div>
            <div class="spec-val">24 MONTHS<br>RUNWAY</div>
            <div class="spec-desc">Funding to build the Best Model and capture the market without OpEx risk.</div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem; text-align: left;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE COMMITMENT</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            We burn brainpower, not servers. Every dollar builds IP.
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
    font-size: 1.8rem;
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