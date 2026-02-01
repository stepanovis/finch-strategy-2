export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Fact #3: Hardware Reality</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">THE SLEEPER SUPERCOMPUTER</h1>
    
    <div class="facts-container">
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">100% DEPLOYED</div>
                <div class="fact-desc">
                    Every MacBook since 2020 has a Neural Engine. 
                    <br><span style="font-size: 0.8rem; color: #555;">(Base: M1/M2/M3/M4 Chips)</span>
                </div>
            </div>
        </div>
        
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">DATACENTER PERFORMANCE</div>
                <div class="fact-desc">
                    M4 Max rivals datacenter GPUs (546 GB/s bandwidth).
                    <br><span style="font-size: 0.8rem; color: #555;">(Source: Apple Research 2025, Arxiv 2511.05502)</span>
                </div>
            </div>
        </div>
        
        <div class="fact-row" style="margin-top: 2rem; border-top: 1px solid #333; padding-top: 2rem;">
            <div class="fact-content">
                <div class="fact-title" style="color: var(--color-accent);">THE INSIGHT</div>
                <div class="fact-desc" style="color: #fff;">Your employees already have the necessary infrastructure on their desks.</div>
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