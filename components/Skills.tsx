import React from 'react';
import type { SkillsData } from '../types';

interface SkillsProps {
    skills: SkillsData;
}

const SkillPill: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
    <div className={`rounded-md bg-slate-200/60 px-4 py-2 text-sm font-medium text-slate-700 transition-transform duration-200 hover:scale-110 ${className || ''}`} style={style}>
        {children}
    </div>
);

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const allSkills = [...skills.strong, ...skills.basic];
    return (
        <section id="skills" className="fade-in-element">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Habilidades</h2>
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Técnicas</h3>
                <div className="flex flex-wrap gap-3">
                    {allSkills.map((skill, index) => (
                        <SkillPill 
                            key={index}
                            className="fade-in-element"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {skill}
                        </SkillPill>
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Idiomas</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.languages.map((lang, index) => (
                        <SkillPill 
                            key={index}
                            className="fade-in-element"
                            style={{ transitionDelay: `${(allSkills.length + index) * 50}ms` }}
                        >
                            {lang.flag} {lang.lang} - {lang.level}
                        </SkillPill>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;