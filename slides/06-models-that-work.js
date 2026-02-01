export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">FINCH: SOVEREIGN COMPLIANCE</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE SAFE POCKET AI</h1>
    
    <div class="specs-container">
        <div class="spec-col">
            <div class="spec-label">CORE</div>
            <div class="spec-val">7B MODEL</div>
            <div class="spec-desc">Fine-tuned for AML/KYC. Beats generic GPT-4 on compliance tasks.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">DEPLOYMENT</div>
            <div class="spec-val">ON-DEVICE</div>
            <div class="spec-desc">Zero Data Egress. Runs on M-Series Neural Engine.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">TRAINING</div>
            <div class="spec-val">FEDERATED</div>
            <div class="spec-desc">Learns from 1000s of analysts without seeing their data. Private by design.</div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem; text-align: left;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE MOAT</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            Federated Learning on domain-specific data yields higher accuracy than centralized training on generic web data. <span style="color: #666;">(Google Gboard Proof: 30% typing improvement via local learning)</span>
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
}
.spec-desc {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #888;
    line-height: 1.4;
}
</style>
`;