import { createElement } from '../core/dom.js';

export const GTMStrategy = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['GO-TO-MARKET']),
        createElement('div', ['text-sm', 'text-purple-500', 'font-mono', 'uppercase', 'tracking-widest'], ['THE TROJAN HORSE STRATEGY'])
    ]);

    // Three phases: Pocket AI -> Shadow IT -> Enterprise
    const phases = [
        {
            number: '01',
            title: 'POCKET AI',
            subtitle: 'INDIVIDUALS (B2C)',
            color: 'blue',
            items: [
                { label: 'Target', value: 'Freelance Auditors, Consultants, Lawyers' },
                { label: 'Value', value: 'Instant "Second Brain" for compliance. Works offline. No one knows you use it.' },
                { label: 'Distribution', value: 'Free / Low Cost. Viral growth via professional communities.' },
                { label: 'Goal', value: 'Build the "Federated Brain" (Model Training) & Brand Love.' }
            ]
        },
        {
            number: '02',
            title: 'SHADOW IT',
            subtitle: 'BOTTOM-UP (B2B)',
            color: 'purple',
            items: [
                { label: 'Target', value: 'Employees inside Banks & Fintechs' },
                { label: 'Mechanism', value: 'Staff install Finch on work MacBooks to bypass blocked ChatGPT.' },
                { label: 'Sticky', value: 'They rely on it daily. It becomes essential infrastructure "under the radar".' },
                { label: 'Goal', value: 'Achieve critical mass (10-20% of department) to force IT hand.' }
            ]
        },
        {
            number: '03',
            title: 'LEGALIZATION',
            subtitle: 'ENTERPRISE (B2E)',
            color: 'emerald',
            items: [
                { label: 'Target', value: 'CISO & CTOs' },
                { label: 'The Pitch', value: '"Your staff is already using AI. You can\'t stop it. But you can LICENSE it to control it."' },
                { label: 'Value', value: 'We offer the Management Layer for the tool they already love.' },
                { label: 'Goal', value: 'Multi-million dollar Enterprise Licenses.' }
            ]
        }
    ];

    // Phase cards
    const phaseCards = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'mb-16'],
        phases.map(phase =>
            createElement('div', [
                'relative', 'p-6', 'rounded-lg', 'bg-gray-800/50', 'border-2', 'border-' + phase.color + '-800',
                'hover:border-' + phase.color + '-600', 'transition-all'
            ], [
                // Phase number badge
                createElement('div', ['absolute', 'top-4', 'right-4', 'w-10', 'h-10', 'rounded-full', 'bg-' + phase.color + '-900/50', 'border', 'border-' + phase.color + '-700', 'flex', 'items-center', 'justify-center'], [
                    createElement('span', ['text-xs', 'font-bold', 'text-' + phase.color + '-400'], [phase.number])
                ]),

                // Title
                createElement('div', ['mb-4'], [
                    createElement('div', ['text-xl', 'font-bold', 'text-' + phase.color + '-400', 'mb-1'], [phase.title]),
                    createElement('div', ['text-sm', 'text-gray-500', 'font-mono'], [phase.subtitle])
                ]),

                // Items
                createElement('div', ['space-y-4'],
                    phase.items.map(item =>
                        createElement('div', [], [
                            createElement('div', ['text-xs', 'text-' + phase.color + '-500', 'font-bold', 'mb-1'], [item.label]),
                            createElement('div', ['text-sm', 'text-gray-300', 'leading-snug'], [item.value])
                        ])
                    )
                )
            ])
        )
    );

    const quote = createElement('div', ['text-center', 'max-w-3xl', 'mx-auto', 'bg-gray-900', 'p-6', 'rounded-xl', 'border', 'border-gray-800'], [
        createElement('p', ['text-xl', 'italic', 'text-gray-400', 'mb-4'], ['"We don\'t ask for permission to enter the enterprise. We enter through the user\'s pocket, prove our value, and then get paid to stay."']),
        createElement('div', ['text-sm', 'text-gray-600', 'font-mono'], ['— Finch GTM Manifesto'])
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        phaseCards,
        quote
    ]);
};
