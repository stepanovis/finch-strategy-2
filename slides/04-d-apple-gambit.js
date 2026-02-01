export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Fact #3: The Platform Shift</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE APPLE GAMBIT</h1>
    
    <div class="facts-container">
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">THE STRATEGY</div>
                <div class="fact-desc">
                    Apple outsourced Cloud AI to Google (Gemini in Siri) to win the real war: Local Inference.
                </div>
            </div>
        </div>
        
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">THE WEAPON</div>
                <div class="fact-desc">
                    M4 Max rivals Datacenter GPUs (546 GB/s bandwidth). M-Series Neural Engines are 2-3 years ahead.
                </div>
            </div>
        </div>

        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">THE SCALE</div>
                <div class="fact-desc">
                    The "Sleeper Supercomputer" is already deployed. Every MacBook since 2020 is AI-ready.
                </div>
            </div>
        </div>
        
        <div class="fact-row" style="margin-top: 2rem; border-top: 1px solid #333; padding-top: 2rem;">
            <div class="fact-content">
                <div class="fact-title" style="color: var(--color-accent);">THE PREDICTION</div>
                <div class="fact-desc" style="color: #fff;">Personal Models will destroy the Wrapper Economy.</div>
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