export const slide = `
<div class="slide">
    <div class="key-message">
        <h1>Архитектура: Ядро + Плагины</h1>
        <p class="thesis">Compliance Core Model + LoRA-плагины под задачи</p>
    </div>

    <div class="details">
        <div class="diagram">
            <svg viewBox="0 0 600 180" style="max-width: 550px;">
                <rect x="200" y="10" width="200" height="50" rx="8" fill="#4ecdc4"/>
                <text x="300" y="40" text-anchor="middle" fill="#000" font-weight="bold" font-size="14">CORE MODEL (7-8B)</text>

                <rect x="30" y="100" width="90" height="40" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="75" y="125" text-anchor="middle" fill="#4ecdc4" font-size="11">AML</text>

                <rect x="140" y="100" width="90" height="40" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="185" y="125" text-anchor="middle" fill="#4ecdc4" font-size="11">KYC</text>

                <rect x="250" y="100" width="90" height="40" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="295" y="125" text-anchor="middle" fill="#4ecdc4" font-size="11">Sanctions</text>

                <rect x="360" y="100" width="90" height="40" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="405" y="125" text-anchor="middle" fill="#4ecdc4" font-size="11">Tax</text>

                <rect x="470" y="100" width="90" height="40" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="515" y="125" text-anchor="middle" fill="#4ecdc4" font-size="11">GDPR</text>

                <line x1="300" y1="60" x2="75" y2="100" stroke="#4ecdc4" stroke-width="1"/>
                <line x1="300" y1="60" x2="185" y2="100" stroke="#4ecdc4" stroke-width="1"/>
                <line x1="300" y1="60" x2="295" y2="100" stroke="#4ecdc4" stroke-width="1"/>
                <line x1="300" y1="60" x2="405" y2="100" stroke="#4ecdc4" stroke-width="1"/>
                <line x1="300" y1="60" x2="515" y2="100" stroke="#4ecdc4" stroke-width="1"/>

                <text x="300" y="165" text-anchor="middle" fill="#666" font-size="10">Каждый плагин: 10-20 MB</text>
            </svg>
        </div>
    </div>
</div>
`;
