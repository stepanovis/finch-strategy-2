export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">The Market Problem</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">EVERYONE IS A WRAPPER</h1>
    
    <div class="diagram-container">
        <!-- Top Layer: The Competition Zone -->
        <div class="layer top-layer">
            <div class="layer-label">COMPETITION ZONE</div>
            <div class="layer-content">UI / UX / PROMPTS / RAG</div>
        </div>

        <!-- Middle Layer: The Deployment Illusion -->
        <div class="middle-layer">
            <div class="column">
                <div class="col-label">PUBLIC API</div>
                <div class="col-sub">OpenAI Wrapper</div>
            </div>
            <div class="column border-x">
                <div class="col-label">PRIVATE CLOUD</div>
                <div class="col-sub">Bedrock Wrapper</div>
            </div>
            <div class="column">
                <div class="col-label">GENERIC ON-PREM</div>
                <div class="col-sub">Llama Wrapper</div>
            </div>
        </div>
    </div>
    
    <!-- Conclusion -->
    <div class="conclusion">
        <span style="color: var(--color-accent);">THE REALITY:</span> IDENTICAL GENERIC INTELLIGENCE
    </div>
</div>

<style>
.diagram-container {
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.layer {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.top-layer {
    border-bottom: 1px solid #333;
    background: rgba(255,255,255,0.02);
}

.layer-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--color-accent);
    letter-spacing: 2px;
}

.layer-content {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
}

.middle-layer {
    display: flex;
    height: 200px;
}

.column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.column.border-x {
    border-left: 1px solid #333;
    border-right: 1px solid #333;
}

.col-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
}

.col-sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: #666;
}

.conclusion {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.25rem;
    color: #666;
    text-align: center;
    letter-spacing: 1px;
    padding-top: 1rem;
}
</style>
`;