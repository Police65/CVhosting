
import React from 'react';

export interface TimelineItem {
    icon: string;
    period: string;
    title: string;
    subtitle: string;
}

export interface TrainingItem {
    title: string;
    description: string;
}

export interface ExperienceItem {
    period: string;
    title: string;
    company: string;
    description: string[];
}

export interface Language {
    flag: string;
    lang: string;
    level: string;
}

export interface SkillsData {
    strong: string[];
    basic: string[];
    languages: Language[];
}

export interface ContactLink {
    href: string;
    icon: React.ReactNode;
    text: string;
    name: string; // for tracking
}

export interface ResumeData {
    name: string;
    title: string;
    // Fix: Added avatarUrl to match the data object in App.tsx
    avatarUrl: string;
    about: string;
    experience: ExperienceItem[];
    education: TimelineItem[];
    training: TrainingItem[];
    skills: SkillsData;
    contact: {
        // Fix: Added location to match the data object in App.tsx
        location: string;
        email: string;
        phone: string;
        links: ContactLink[];
    };
}
