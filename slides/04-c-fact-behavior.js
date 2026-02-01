export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Fact #1: User Behavior</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">QUALITY TRUMPS RULES</h1>
    
    <div class="facts-container">
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">EFFICIENCY > SECURITY</div>
                <div class="fact-desc">
                    78% of employees ignore bans to use generic AI.<br>
                    <span style="font-size: 0.8rem; color: #555;">(Source: Gartner 2024, Salesforce AI Trust Survey)</span>
                </div>
            </div>
        </div>
        
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">SMART > LOYAL</div>
                <div class="fact-desc">
                    Engineers choose models that yield better code, regardless of policy.<br>
                    <span style="font-size: 0.8rem; color: #555;">(Observed Trend: Microsoft Engineers utilizing Claude Sonnet)</span>
                </div>
            </div>
        </div>
        
        <div class="fact-row" style="margin-top: 2rem; border-top: 1px solid #333; padding-top: 2rem;">
            <div class="fact-content">
                <div class="fact-title" style="color: var(--color-accent);">THE INSIGHT</div>
                <div class="fact-desc" style="color: #fff;">Users always bypass "safe" corporate tools for "smart" shadow tools (if they exist).</div>
            </div>
        </div>
    </div>
</div>

<style>
.facts-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    /* Removed border-left and padding-left */
}
.fact-row {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    /* Removed padding-left */
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