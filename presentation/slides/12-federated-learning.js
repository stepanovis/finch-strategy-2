export const slide = `
<div class="slide">
    <div class="key-message">
        <h1>Federated Learning</h1>
        <p class="thesis">Обучаем модель на данных пользователей — без доступа к данным</p>
    </div>

    <div class="details">
        <div class="diagram">
            <svg viewBox="0 0 500 200" style="max-width: 450px;">
                <rect x="175" y="10" width="150" height="40" rx="5" fill="#4ecdc4"/>
                <text x="250" y="35" text-anchor="middle" fill="#000" font-size="12" font-weight="bold">Сервер: веса</text>

                <rect x="30" y="120" width="100" height="50" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="80" y="145" text-anchor="middle" fill="#fff" font-size="10">Device 1</text>
                <text x="80" y="160" text-anchor="middle" fill="#666" font-size="9">данные локально</text>

                <rect x="200" y="120" width="100" height="50" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="250" y="145" text-anchor="middle" fill="#fff" font-size="10">Device 2</text>
                <text x="250" y="160" text-anchor="middle" fill="#666" font-size="9">данные локально</text>

                <rect x="370" y="120" width="100" height="50" rx="5" fill="#1a1a2e" stroke="#4ecdc4" stroke-width="2"/>
                <text x="420" y="145" text-anchor="middle" fill="#fff" font-size="10">Device N</text>
                <text x="420" y="160" text-anchor="middle" fill="#666" font-size="9">данные локально</text>

                <line x1="80" y1="120" x2="200" y2="50" stroke="#27ae60" stroke-width="2"/>
                <line x1="250" y1="120" x2="250" y2="50" stroke="#27ae60" stroke-width="2"/>
                <line x1="420" y1="120" x2="300" y2="50" stroke="#27ae60" stroke-width="2"/>

                <text x="130" y="85" fill="#27ae60" font-size="10">только веса ↑</text>
            </svg>
        </div>
        <p style="text-align: center; color: #27ae60;">✓ Отправляются: веса модели</p>
        <p style="text-align: center; color: #e74c3c;">✗ НЕ отправляются: данные, документы</p>
    </div>
</div>
`;
