import React from 'react';
import type { TimelineItem as TimelineItemData } from '../types';


interface EducationProps {
    title: string;
    items: TimelineItemData[];
}

const TimelineItem: React.FC<{ item: TimelineItemData }> = ({ item }) => (
    <div className="relative mb-8 last:mb-0">
        <div className="absolute -left-[42px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
            <span className="material-symbols-outlined text-xl text-slate-600">{item.icon}</span>
        </div>
        <p className="text-sm text-slate-500">{item.period}</p>
        <p className="font-semibold text-slate-800">{item.title}</p>
        <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
    </div>
);

const Education: React.FC<EducationProps> = ({ title, items }) => {
    return (
        <section id="education">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
            <div className="mt-8 border-l-2 border-slate-200 pl-12">
                {items.map((item, index) => (
                    <TimelineItem key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Education;
