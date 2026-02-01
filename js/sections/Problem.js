import { createElement } from '../core/dom.js';

export const Problem = () => {
    const header = createElement('div', ['text-center', 'mb-16'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white'], ['THE PROBLEM']),
        createElement('p', ['text-xl', 'text-red-400', 'mt-4', 'font-mono'], ['THE "WRAPPER" ERA IS OVER'])
    ]);

    const problemCards = [
        {
            title: 'GPT Wrappers are Dead',
            icon: '☠️',
            desc: 'Building B2B soft on OpenAI APIs is suicide. Oracle & Microsoft will crush you with budget. If OpenAI raises prices, you die.',
            highlight: false
        },
        {
            title: 'The Sleeper Supercomputer',
            icon: '💻',
            desc: 'Your employees already have M3 MacBooks. They are "Sleeper Supercomputers" capable of running GPT-4 class models locally, but they sit idle.',
            highlight: true
        },
        {
            title: 'Shadow AI is 78%',
            icon: '🕵️‍♂️',
            desc: 'Banks ban ChatGPT, but 78% of staff use it anyway via hotspot. They want efficiency. You can\'t stop them, so secure them.',
            highlight: false
        }
    ];

    const cardsContainer = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'max-w-6xl', 'mx-auto'], 
        problemCards.map(card => 
            createElement('div', ['p-8', 'rounded-xl', 'border', 'border-gray-800', 'bg-gray-900/50', card.highlight ? 'ring-2 ring-red-500/50' : ''], [
                createElement('div', ['text-4xl', 'mb-4'], [card.icon]),
                createElement('h3', ['text-2xl', 'font-bold', 'text-white', 'mb-3'], [card.title]),
                createElement('p', ['text-gray-400', 'leading-relaxed'], [card.desc])
            ])
        )
    );

    return createElement('div', [], [
        header,
        cardsContainer
    ]);
};
