import { createElement } from '../core/dom.js';

export const WhyNow = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white'], ['WHY NOW?']),
        createElement('p', ['text-gray-400', 'mt-2'], ['Hardware & Algorithms have crossed the Rubicon.'])
    ]);

    const factors = [
        {
            title: 'Densing Law',
            stat: 'x2',
            sub: 'Capability Density / 3.5 mos',
            desc: 'Model efficiency doubles every 3.5 months. A 7B model in 2026 will outperform the 70B model of 2024. We don\'t need giant models anymore.',
            color: 'emerald'
        },
        {
            title: 'Apple Silicon',
            stat: '100%',
            sub: 'M-Chip Market Penetration',
            desc: 'Every MacBook since 2020 has a Neural Engine. By 2026, 5+ years of devices are AI-ready. This is free infrastructure sitting on user desks.',
            color: 'blue'
        },
        {
            title: 'Privacy Tsunami',
            stat: '20+',
            sub: 'New US State Laws 2025',
            desc: 'GDPR was just the start. New laws mandate data localization. Sending customer financial data to OpenAI API is becoming illegal.',
            color: 'purple'
        }
    ];

    const cards = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'max-w-6xl', 'mx-auto', 'mb-16'], 
        factors.map(f => 
            createElement('div', ['p-6', 'rounded-xl', 'bg-gray-800/30', 'border', 'border-gray-700', 'text-center'], [
                createElement('div', ['text-6xl', 'font-bold', 'text-' + f.color + '-400', 'mb-2'], [f.stat]),
                createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'mb-4'], [f.sub]),
                createElement('h3', ['text-xl', 'font-bold', 'text-white', 'mb-2'], [f.title]),
                createElement('p', ['text-gray-400', 'text-sm', 'leading-relaxed'], [f.desc])
            ])
        )
    );
    
    // Bottom Quote
    const quote = createElement('div', ['text-center', 'max-w-3xl', 'mx-auto', 'italic', 'text-gray-500'], [
        '"We are not just following the trend. We are waiting at the destination." -- Manifesto'
    ]);

    return createElement('div', [], [
        header,
        cards,
        quote
    ]);
};
