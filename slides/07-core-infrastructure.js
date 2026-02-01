export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Technological Core</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE CORE INFRASTRUCTURE</h1>
    
    <div class="specs-container">
        <div class="spec-col">
            <div class="spec-label">THE BRAIN</div>
            <div class="spec-val">7B FINETUNED<br>MODEL</div>
            <div class="spec-desc">Optimized for Apple Silicon. Runs locally with zero latency.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">THE NERVOUS SYSTEM</div>
            <div class="spec-val">FEDERATED<br>PROTOCOL</div>
            <div class="spec-desc">Distributed training infrastructure that updates the model without moving data.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">THE ASSET</div>
            <div class="spec-val">WEIGHTS OWNERSHIP</div>
            <div class="spec-desc">We own the intelligence (weights). Clients own the secrets (data).</div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem; text-align: left;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE MOAT</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            This infrastructure makes us the only player capable of learning from private data at scale.
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