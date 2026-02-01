export const slide = `
<div class="slide">
    <div class="red-pulse"></div>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #ff6666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">The Competition</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1; color: #ff4444;">THE RED OCEAN</h1>
    
    <div class="points-container" style="border-left: 1px solid #ff4444;">
        <div class="point-row">
            <div class="point-val">VETERANS AWAKE</div>
            <div class="point-desc">Incumbents integrating the same Generic Models</div>
        </div>
        <div class="point-row">
            <div class="point-val">ZERO ADVANTAGE</div>
            <div class="point-desc">You share the same "Brain" (GPT/Claude)</div>
        </div>
        <div class="point-row">
            <div class="point-val">DATA MOAT</div>
            <div class="point-desc">They have 20 years of data. You have a Wrapper.</div>
        </div>
        
        <div class="point-row" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #ff4444;">
            <div class="point-val" style="color: #ff4444;">THE OUTCOME</div>
            <div class="point-desc" style="color: #fff;">Commoditized War</div>
        </div>
    </div>
</div>

<style>
.red-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 60vw;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    z-index: -1;
    animation: danger-pulse 4s ease-in-out infinite;
    pointer-events: none;
}

@keyframes danger-pulse {
    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.4; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
    100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.4; }
}

.points-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
    color: #888;
}
</style>
`;