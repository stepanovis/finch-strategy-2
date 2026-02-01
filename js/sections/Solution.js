import { createElement } from '../core/dom.js';

export const Solution = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE SOLUTION']),
        createElement('div', ['text-sm', 'text-emerald-500', 'font-mono', 'uppercase', 'tracking-widest'], ['FINCH LOCAL • ZERO EGRESS • FEDERATED LEARNING'])
    ]);

    // Main Feature: The Local Node
    const mainFeature = createElement('div', ['bg-gray-900', 'border', 'border-gray-700', 'rounded-2xl', 'p-8', 'mb-16', 'max-w-5xl', 'mx-auto', 'relative', 'overflow-hidden'], [
        createElement('div', ['absolute', 'top-0', 'right-0', 'w-64', 'h-64', 'bg-emerald-500/10', 'rounded-full', 'blur-3xl', '-translate-y-1/2', 'translate-x-1/2']),
        
        createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-12', 'items-center', 'relative', 'z-10'], [
            createElement('div', [], [
                createElement('h3', ['text-3xl', 'font-bold', 'text-white', 'mb-4'], ['Legal Doping for Compliance']),
                createElement('p', ['text-gray-400', 'mb-6', 'text-lg'], [
                    'A dedicated 7B-parameter model living entirely on your MacBook. Fine-tuned for AML, KYC, and sanctions. It knows everything about compliance, but tells no one about your data.'
                ]),
                createElement('ul', ['space-y-3'], [
                    ['✓ Works Offline (Air-gapped)', 'text-emerald-400'],
                    ['✓ Zero Data Egress (Paranoid Security)', 'text-emerald-400'],
                    ['✓ No API Costs ($0 Inference)', 'text-emerald-400'],
                    ['✓ Faster than Cloud (Local M3/M4 Optimization)', 'text-emerald-400']
                ].map(([text, color]) => createElement('li', ['flex', 'items-center', color], [text])))
            ]),
            // Visual representation of Local Node
            createElement('div', ['bg-black/50', 'rounded-xl', 'p-6', 'font-mono', 'text-sm', 'border', 'border-gray-800'], [
                createElement('div', ['flex', 'justify-between', 'text-gray-500', 'mb-4', 'border-b', 'border-gray-800', 'pb-2'], [
                    createElement('span', [], ['terminal']),
                    createElement('span', ['text-emerald-500'], ['● Connected: localhost:8080'])
                ]),
                createElement('div', ['space-y-2'], [
                    createElement('div', ['text-blue-400'], ['> Analyzing "Suspicious_Tx_Report.pdf"...']),
                    createElement('div', ['text-gray-400'], ['  • Local RAG Indexing: 140ms']),
                    createElement('div', ['text-gray-400'], ['  • PII Redaction: Internal']),
                    createElement('div', ['text-gray-400'], ['  • Checking Sanctions Lists (Local DB)...']),
                    createElement('div', ['text-emerald-400', 'mt-2'], ['> RESULT: SAFE. No external calls made.']),
                ])
            ])
        ])
    ]);

    // The Moat: Federated Learning
    const moatSection = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'max-w-6xl', 'mx-auto'], [
        {
            title: 'Federated Learning',
            icon: '🧠',
            desc: 'Users train the model while they work. We receive updated weights (mathematics), never user data. We build the smartest model without seeing a single document.'
        },
        {
            title: 'Plugin Architecture',
            icon: '🔌',
            desc: 'Core 7B model + Specialized 20MB LoRA Plugins for specific jurisdictions (Mexico, Brazil, EU). Best-in-class performance for tiny footprint.'
        },
        {
            title: 'Cost Advantage',
            icon: '📉',
            desc: 'We are a pure software business. Our server costs are $0. Your hardware does the work. Infinite scalability with 99% gross margins.'
        }
    ].map(card => 
        createElement('div', ['p-6', 'bg-gray-800/30', 'border', 'border-gray-700', 'rounded-xl', 'hover:bg-gray-800/50', 'transition-colors'], [
            createElement('div', ['text-4xl', 'mb-4'], [card.icon]),
            createElement('h4', ['text-xl', 'font-bold', 'text-white', 'mb-2'], [card.title]),
            createElement('p', ['text-gray-400', 'text-sm', 'leading-relaxed'], [card.desc])
        ])
    ));

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        mainFeature,
        moatSection
    ]);
};
