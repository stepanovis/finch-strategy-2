export const slide = `
<div class="slide">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #666; letter-spacing: 2px; margin-bottom: 2rem; text-transform: uppercase;">Fact #2: Model Architecture</h2>
    <h1 style="font-size: 5rem; letter-spacing: -3px; margin-bottom: 4rem; line-height: 1;">SMALL BEATS LARGE</h1>
    
    <div class="facts-container">
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">RAG IS NOT ENOUGH</div>
                <div class="fact-desc">
                    Vector search still suffers from 30% retrieval lag and context loss.<br>
                    <span style="font-size: 0.8rem; color: #555;">(Source: Stanford HAI 2024 / Placeholder)</span>
                </div>
            </div>
        </div>
        
        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">FINE-TUNING WINS</div>
                <div class="fact-desc">
                    Fine-tuned 8B > Generic 70B on specific tasks. (+60% Gemma 27B vs Claude Sonnet, Llama 8B > Nemotron 340B).
                    <br><span style="font-size: 0.8rem; color: #555;">(Source: NVIDIA Research, Arxiv 2406.08660)</span>
                </div>
            </div>
        </div>

        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">LORA MAGIC</div>
                <div class="fact-desc">
                    Base model 4GB + 20MB Plugins. Dozens of specializations without storage overhead. Fine-tuning 50-70% cheaper.
                    <br><span style="font-size: 0.8rem; color: #555;">(Source: Databricks, Predibase)</span>
                </div>
            </div>
        </div>

        <div class="fact-row">
            <div class="fact-content">
                <div class="fact-title">LOCAL TRAINING ADVANTAGE</div>
                <div class="fact-desc">
                    Only on-device deployment allows continuous learning from private data without leakage.
                </div>
            </div>
        </div>
        
        <div class="fact-row" style="margin-top: 2rem; border-top: 1px solid #333; padding-top: 2rem;">
            <div class="fact-content">
                <div class="fact-title" style="color: var(--color-accent);">THE INSIGHT</div>
                <div class="fact-desc" style="color: #fff;">Wrappers cannot learn. Only local models can evolve.</div>
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