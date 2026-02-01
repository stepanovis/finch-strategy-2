export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Enterprise Strategy</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">FROM POCKET<br>TO ENTERPRISE</h1>
    
    <div class="specs-container">
        <div class="spec-col">
            <div class="spec-label">ADOPTION</div>
            <div class="spec-val">LEGALIZE<br>USAGE</div>
            <div class="spec-desc">Formal adoption of what employees are already using. Zero friction rollout.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">OVERSIGHT</div>
            <div class="spec-val">PREVENTIVE<br>CONTROL</div>
            <div class="spec-desc">CISO regains oversight with centralized dashboards and policy enforcement.</div>
        </div>
        <div class="spec-col">
            <div class="spec-label">SECURITY</div>
            <div class="spec-val">NO DATA<br>LEAK</div>
            <div class="spec-desc">Enterprise-grade management without breaking the on-premise promise.</div>
        </div>
    </div>

    <div class="insight-row" style="margin-top: 4rem; border-top: 1px solid #333; padding-top: 2rem; text-align: left;">
        <div style="font-family: 'JetBrains Mono', monospace; color: var(--color-accent); margin-bottom: 0.5rem;">THE PITCH</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 1.25rem; color: #fff; max-width: 800px;">
            It’s not a sale. It’s a legalization of existing infrastructure.
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