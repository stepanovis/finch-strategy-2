import { createElement } from '../core/dom.js';

export const MarketOpportunity = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE OPPORTUNITY']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['ON-DEVICE REVOLUTION • ASYMMETRIC BET'])
    ]);

    // Market Stats (Grand View Research etc.)
    const stats = [
        { label: 'On-Device AI', value: '24B', sub: 'Market by 2032 (CAGR 24.6%)', color: 'emerald' },
        { label: 'Small Models', value: '$21B', sub: 'Market by 2030', color: 'blue' },
        { label: 'Edge Hardware', value: '$69B', sub: 'Market by 2031', color: 'purple' }
    ];

    const statsRow = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'mb-16', 'max-w-5xl', 'mx-auto'], 
        stats.map(s => 
            createElement('div', ['text-center', 'p-6', 'bg-gray-800/30', 'rounded-lg', 'border', 'border-gray-700'], [
                createElement('div', ['text-4xl', 'font-bold', 'text-white', 'mb-2'], [s.value]),
                createElement('div', ['text-xl', 'font-bold', 'text-' + s.color + '-400', 'mb-1'], [s.label]),
                createElement('div', ['text-sm', 'text-gray-500', 'font-mono'], [s.sub])
            ])
        )
    );

    // The Investor Pitch (Hedge)
    const hedgeContainer = createElement('div', ['bg-gray-900', 'border', 'border-gray-700', 'p-8', 'rounded-xl', 'max-w-4xl', 'mx-auto', 'relative'], [
        createElement('div', ['absolute', '-top-3', 'left-1/2', '-translate-x-1/2', 'bg-emerald-600', 'text-white', 'px-4', 'py-1', 'rounded-full', 'text-xs', 'font-bold', 'uppercase'], ['Why Invest?']),
        
        createElement('h3', ['text-2xl', 'font-bold', 'text-white', 'text-center', 'mb-6'], ['WE ARE THE HEDGE AGAINST YOUR PORTFOLIO']),
        
        createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8'], [
            // Left: Current Portfolio Risk
            createElement('div', [], [
                createElement('div', ['text-red-400', 'font-bold', 'mb-2', 'flex', 'items-center'], [
                    createElement('span', ['mr-2'], ['⚠️']),
                    'Your Current Portfolio'
                ]),
                createElement('p', ['text-gray-400', 'text-sm', 'mb-4'], ['90% of your AI bets are Wrappers dependent on OpenAI/Anthropic.']),
                createElement('ul', ['space-y-2', 'text-sm', 'text-gray-500'], [
                    '❌ Vendor Lock-in (OpenAI raises prices -> You die)',
                    '❌ Regulatory Risk (Data privacy laws ban cloud)',
                    '❌ Google/Amazon will crush wrappers'
                ].map(t => createElement('li', [], [t])))
            ]),
            
            // Right: Finch Opportunity
            createElement('div', [], [
                createElement('div', ['text-emerald-400', 'font-bold', 'mb-2', 'flex', 'items-center'], [
                    createElement('span', ['mr-2'], ['🛡️']),
                    'Finch (The Hedge)'
                ]),
                createElement('p', ['text-gray-400', 'text-sm', 'mb-4'], ['Zero dependency. Own IP. Local Infrastructure.']),
                createElement('ul', ['space-y-2', 'text-sm', 'text-gray-300'], [
                    '✅ Immune to OpenAI pricing',
                    '✅ Compliant by design (Zero Data Egress)',
                    '✅ Asymmetric Upside (Pre-seed valuation)'
                ].map(t => createElement('li', [], [t])))
            ])
        ])
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        statsRow,
        hedgeContainer
    ]);
};

