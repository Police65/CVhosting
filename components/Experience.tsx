import React from 'react';
import type { ExperienceItem as ExperienceItemData } from '../types';

interface ExperienceProps {
    title: string;
    items: ExperienceItemData[];
}

const ExperienceItem: React.FC<{ item: ExperienceItemData; className?: string; style?: React.CSSProperties }> = ({ item, className, style }) => (
    <div className={`relative mb-8 last:mb-0 ${className || ''}`} style={style}>
        <div className="absolute -left-[42px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
            <span className="material-symbols-outlined text-xl text-slate-600">work</span>
        </div>
        <p className="text-sm text-slate-500">{item.period}</p>
        <p className="font-semibold text-slate-800">{item.title} - <span className="font-normal">{item.company}</span></p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
            {item.description.map((point, index) => (
                <li key={index} className="text-sm text-slate-600">{point}</li>
            ))}
        </ul>
    </div>
);

const Experience: React.FC<ExperienceProps> = ({ title, items }) => {
    return (
        <section id="experience" className="fade-in-element">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
            <div className="mt-8 border-l-2 border-slate-200 pl-12">
                {items.map((item, index) => (
                    <ExperienceItem 
                        key={index} 
                        item={item} 
                        className="fade-in-element"
                        style={{ transitionDelay: `${index * 150}ms` }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;