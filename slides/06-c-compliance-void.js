export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">The Market Gap</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE COMPLIANCE VOID</h1>
    
    <div class="facts-container">
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">REQUIREMENT, NOT FEATURE</div>
                <div class="fact-desc">
                    For AML/KYC, local processing is a legal mandate. Sensitive data cannot touch the cloud.
                </div>
            </div>
        </div>
        
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">DATA GRAVITY</div>
                <div class="fact-desc">
                    Sanctions lists, tax records, and policies live behind the firewall. Moving them is a risk.
                </div>
            </div>
        </div>

        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">THE GAP</div>
                <div class="fact-desc">
                    OpenAI and Anthropic will never focus on compliance. It is too niche for their generalist models.
                </div>
            </div>
        </div>
        
        <div class="fact-row" style="margin-top: 2rem; border-top: 1px solid #333; padding-top: 2rem;">
            <div class="fact-content">
                <div class="fact-title" style="color: var(--color-accent);">THE OPPORTUNITY</div>
                <div class="fact-desc" style="color: #fff;">A specialized void that only a local model can fill.</div>
            </div>
        </div>
    </div>
</div>

<style>
.facts-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.fact-row {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}
.fact-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.fact-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.fact-desc {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: #888;
    line-height: 1.4;
    max-width: 600px;
}
</style>
`;