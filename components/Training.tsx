import React from 'react';
import type { TrainingItem as TrainingItemData } from '../types';

interface TrainingProps {
    title: string;
    items: TrainingItemData[];
}

const TrainingItem: React.FC<{ item: TrainingItemData; className?: string; style?: React.CSSProperties }> = ({ item, className, style }) => (
     <div className={`relative mb-8 last:mb-0 ${className || ''}`} style={style}>
        <div className="absolute -left-[42px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
            <span className="material-symbols-outlined text-xl text-slate-600">model_training</span>
        </div>
        <p className="font-semibold text-slate-800">{item.title}</p>
        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
    </div>
);


const Training: React.FC<TrainingProps> = ({ title, items }) => {
    return (
        <section id="training" className="fade-in-element">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
            <div className="mt-8 border-l-2 border-slate-200 pl-12">
                {items.map((item, index) => (
                    <TrainingItem 
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

export default Training;