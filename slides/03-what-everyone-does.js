export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">The Market Truth</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">SHADOW REALITY<span class="cursor">_</span></h1>
    
    <div class="points-container">
        <div class="point-row">
            <div class="point-val">78% EMPLOYEES</div>
            <div class="point-desc">Bypassing corporate bans</div>
        </div>
        <div class="point-row">
            <div class="point-val">ZERO SECURITY</div>
            <div class="point-desc">Copy-pasting sensitive data</div>
        </div>
        <div class="point-row">
            <div class="point-val">UNSTOPPABLE</div>
            <div class="point-desc">Efficiency > Compliance</div>
        </div>
        
        <div class="point-row" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #333;">
            <div class="point-val" style="color: var(--color-accent);">THE CONCLUSION</div>
            <div class="point-desc" style="color: #fff;">Bans don't work. Secure them.</div>
        </div>
    </div>
</div>

<style>
.points-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-left: 1px solid #333;
    padding-left: 3rem;
}
.point-row {
    display: flex;
    align-items: baseline;
    gap: 3rem;
}
.point-val {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    min-width: 320px;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.point-desc {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: #666;
}
.cursor {
    animation: blink 1s step-end infinite;
    color: var(--color-accent);
}
@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
</style>
`;