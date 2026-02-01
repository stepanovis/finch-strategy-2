export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Fact #4: Training</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">FEDERATED LEARNING</h1>
    
    <div class="facts-container">
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">GOOGLE TRAINS FEDERATED</div>
                <div class="fact-desc">
                    Google uses this to train Gboard prediction on billions of devices. It is validated and scalable.
                    <br><span style="font-size: 0.8rem; color: #555;">(Google Research 2024)</span>
                </div>
            </div>
        </div>
        
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">PRIVACY BY MATH</div>
                <div class="fact-desc">
                    Only updated weights (mathematics) are sent to the cloud. Zero data egress.
                </div>
            </div>
        </div>

        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">INFINITE SCALABILITY</div>
                <div class="fact-desc">
                    The network grows smarter with every new user, with zero added infrastructure cost. Computing is decentralized.
                </div>
            </div>
        </div>
        
        <div class="fact-row" style="margin-top: 2rem; border-top: 1px solid #333; padding-top: 2rem;">
            <div class="fact-content">
                <div class="fact-title" style="color: var(--color-accent);">THE REALITY</div>
                <div class="fact-desc" style="color: #fff;">The only way to train on private data is to never move it.</div>
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