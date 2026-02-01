export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Where We Invest</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">BEST MODEL DEVELOPMENT</h1>
    
    <div class="specs-container">
        <div class="spec-col">
            <div class="spec-label">FOUNDATION</div>
            <div class="spec-val">COMPLIANCE<br>MODEL</div>
            <div class="spec-desc">7B parameter base model, fine-tuned on global compliance logic and reasoning.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">SKILLS</div>
            <div class="spec-val">SPECIALIZED<br>PLUGINS</div>
            <div class="spec-desc">Library of LoRA adapters for specific jurisdictions (AML-MX, KYC-BR). Hot-swappable.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">EVOLUTION</div>
            <div class="spec-val">FEDERATED<br>ENGINE</div>
            <div class="spec-desc">Protocol for decentralized weight updates. The model learns without seeing data.</div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem; text-align: left;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE GOAL</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            The most efficient and cost-effective model on the market. The <span style="color: var(--color-accent);">perfect balance</span> of performance and cost.
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