import React from 'react';
import type { ResumeData } from './types';

export type Lang = 'es' | 'en';

export interface Labels {
    navAbout: string;
    navExperience: string;
    navSkills: string;
    navEducation: string;
    navContact: string;
    sectionExperience: string;
    sectionSkills: string;
    sectionSkillsTechnical: string;
    sectionSkillsLanguages: string;
    sectionEducation: string;
    sectionTraining: string;
    sectionDownload: string;
    sectionDownloadGenerating: string;
    footerRights: string;
    pdfContact: string;
    pdfSkills: string;
    pdfLanguages: string;
    pdfQrLabel: string;
    pdfMainHeading: string;
    pdfEducation: string;
    pdfTraining: string;
}

export const labels: Record<Lang, Labels> = {
    es: {
        navAbout: 'Sobre mí',
        navExperience: 'Experiencia',
        navSkills: 'Habilidades',
        navEducation: 'Educación',
        navContact: 'Contacto',
        sectionExperience: 'Experiencia Laboral',
        sectionSkills: 'Habilidades',
        sectionSkillsTechnical: 'Técnicas',
        sectionSkillsLanguages: 'Idiomas',
        sectionEducation: 'Educación',
        sectionTraining: 'Formación Adicional',
        sectionDownload: 'Descargar CV',
        sectionDownloadGenerating: 'Generando...',
        footerRights: 'Todos los derechos reservados.',
        pdfContact: 'Contacto',
        pdfSkills: 'Habilidades',
        pdfLanguages: 'Idiomas',
        pdfQrLabel: 'Visita mi CV Interactivo',
        pdfMainHeading: 'Formación y Experiencia',
        pdfEducation: 'Educación',
        pdfTraining: 'Cursos y Formación',
    },
    en: {
        navAbout: 'About me',
        navExperience: 'Experience',
        navSkills: 'Skills',
        navEducation: 'Education',
        navContact: 'Contact',
        sectionExperience: 'Work Experience',
        sectionSkills: 'Skills',
        sectionSkillsTechnical: 'Technical',
        sectionSkillsLanguages: 'Languages',
        sectionEducation: 'Education',
        sectionTraining: 'Additional Training',
        sectionDownload: 'Download CV',
        sectionDownloadGenerating: 'Generating...',
        footerRights: 'All rights reserved.',
        pdfContact: 'Contact',
        pdfSkills: 'Skills',
        pdfLanguages: 'Languages',
        pdfQrLabel: 'Visit my Interactive CV',
        pdfMainHeading: 'Education & Experience',
        pdfEducation: 'Education',
        pdfTraining: 'Courses & Training',
    },
};

const linkedInIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const githubIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

export const resumeDataEs: ResumeData = {
    name: "Fermin Chirinos",
    title: "Desarrollador Full-Stack, Backend y Automatización con IA",
    avatarUrl: '/avatar.jpeg',
    about: "Hola, soy Fermin Chirinos. T.S.U. en Informática egresado de IUTEPAL y un apasionado desarrollador con un fuerte enfoque en automatizaciones, agentes autónomos y soluciones que emplean inteligencia artificial. Mi especialidad es crear herramientas eficientes como bots de atención al público con IA, flujos de trabajo automatizados y sistemas de acciones automáticas. También programas de escritorio y apps. Me encantan los retos, estoy siempre aprendiendo y me dedico por completo a mi trabajo.",
    experience: [
        {
            period: "Jul. 2026 - Actualidad",
            title: "Desarrollador Full-Stack, Backend y de Automatización de Software",
            company: "Old Oaks · Medio tiempo",
            description: [
                "Automatización de procesos y flujos de trabajo del negocio.",
                "Integración con CRM y obtención de datos clave para la operación.",
                "Desarrollo backend y full-stack, incluyendo landings bilingües y documentación técnica.",
            ],
        },
        {
            period: "Abr. 2026 - Jul. 2026",
            title: "Desarrollador de Software y Automatizaciones",
            company: "Cámara de Industriales del Estado Carabobo",
            description: [
                "Desarrollo de soluciones de software y automatización para procesos internos.",
                "Implementación de herramientas con IA para optimizar flujos de trabajo.",
            ],
        },
        {
            period: "Feb. 2026 - May. 2026",
            title: "Desarrollador de Agente de Ventas Automatizadas",
            company: "M&T Inversiones",
            description: [
                "Diseño e implementación de un agente de ventas automatizado con IA para atención al cliente.",
                "Integración del agente con canales de comunicación para automatizar el proceso comercial.",
            ],
        },
        {
            period: "Feb. 2025 - Mar. 2026",
            title: "Pasantías de Desarrollo de Software",
            company: "Cámara de Industriales del Estado Carabobo",
            description: [
                "Desarrollo de automatizaciones y soluciones con Inteligencia Artificial, bots con lenguaje natural.",
                "Apps de escritorio.",
                "Implementación de un sistema de noticias automáticas para mantener informados a los afiliados.",
                "Participación como supervisor en la asistencia técnica para la publicidad en la Asamblea de Fedecámaras Nacional.",
            ],
        },
        {
            period: "Abr. 2024 - Jul. 2024",
            title: "Profesor de Programación",
            company: "Benllisoft",
            description: [
                "Instruí a estudiantes en los fundamentos de la programación y desarrollo de software.",
                "Diseñé e impartí lecciones sobre diversas tecnologías y lenguajes de programación.",
            ],
        },
        {
            period: "Ago. 2022 - Abr. 2024",
            title: "Desarrollador Web, Móvil y de Videojuegos",
            company: "AxexAcademy / Axex eSports",
            description: [
                "Desarrollé y mantuve la plataforma web principal usando Svelte y Tailwind CSS.",
                "Creé aplicaciones móviles multiplataforma con Flutter y Firebase.",
                "Participé en el desarrollo de videojuegos utilizando C# y Unity.",
            ],
        },
        {
            period: "Feb. 2021 - Dic. 2021",
            title: "Atención al Público",
            company: "Inter Cauchos C.A",
            description: [
                "Brindé atención y soporte directo a los clientes, resolviendo sus dudas y necesidades.",
                "Gestioné el flujo de clientes y aseguré una experiencia de servicio positiva.",
            ],
        },
    ],
    education: [
        {
            icon: "school",
            period: "2022 - 2025",
            title: "T.S.U. en Informática",
            subtitle: "IUTEPAL: Instituto Tecnológico 'Juan Pablo Pérez Alfonzo'",
        },
        {
            icon: "school",
            period: "2017 - 2021",
            title: "Bachiller Industrial",
            subtitle: "Liceo de Tecnología Industrial 'LITIN'",
        },
    ],
    training: [
        {
            title: "Udacity: Intro a HTML y CSS",
            description: "Cursos para comprender la sintaxis y funcionamiento de HTML y CSS.",
        },
        {
            title: "Udemy: Web Developer Bootcamp",
            description: "Aprendizaje en la creación de aplicaciones web full-stack con HTML, CSS, JavaScript, Python y Django.",
        },
        {
            title: "Social Oplesk: Full Stack Bootcamp, Python + React",
            description: "Fundamentos básicos y sintaxis de Python para diversos usos.",
        },
    ],
    skills: {
        strong: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Vite", "Python", "Django", "PostgreSQL", "Docker", "Supabase", "Firebase", "n8n", "Agentes Autónomos", "Uso adecuado de herramientas de IA", "Webhooks y Flujos de Trabajo", "Bots con IA", "Flutter", "C#"],
        basic: ["MySQL", "SQL Server Management Studio", "Java (Android Studio)", "GOlang", "Svelte JS", "Tauri", "Bootstrap", "PHP", "Rust"],
        languages: [
            { flag: "🇪🇸", lang: "Español", level: "Nativo" },
            { flag: "🇬🇧", lang: "Inglés", level: "Medio (lo suficiente para leer escribir, entender y contestar en llamadas con no tanto lexico)" },
        ],
    },
    contact: {
        location: "Valencia - Carabobo, Venezuela",
        email: "ferlpzwork65ds@gmail.com",
        phone: "+58 4244358426",
        links: [
            {
                name: "linkedin",
                href: "https://www.linkedin.com/in/fermin-chirinos-491770253/",
                text: "LinkedIn",
                icon: linkedInIcon,
            },
            {
                name: "github",
                href: "https://github.com/Police65",
                text: "GitHub",
                icon: githubIcon,
            },
        ],
    },
};

export const resumeDataEn: ResumeData = {
    name: "Fermin Chirinos",
    title: "Full-Stack, Backend & AI Automation Developer",
    avatarUrl: '/avatar.jpeg',
    about: "Hi, I'm Fermin Chirinos. Associate Degree in Computer Science from IUTEPAL, and a passionate developer with a strong focus on automation, autonomous agents, and AI-powered solutions. My specialty is building efficient tools like AI-powered customer service bots, automated workflows, and self-actioning systems. I also build desktop applications and mobile apps. I love challenges, I'm always learning, and I'm fully dedicated to my work.",
    experience: [
        {
            period: "Jul. 2026 - Present",
            title: "Full-Stack, Backend & Software Automation Developer",
            company: "Old Oaks · Part-time",
            description: [
                "Automation of business processes and workflows.",
                "CRM integration and collection of key data for operations.",
                "Backend and full-stack development, including bilingual landing pages and technical documentation.",
            ],
        },
        {
            period: "Apr. 2026 - Jul. 2026",
            title: "Software & Automation Developer",
            company: "Cámara de Industriales del Estado Carabobo",
            description: [
                "Development of software solutions and automation for internal processes.",
                "Implementation of AI-powered tools to optimize workflows.",
            ],
        },
        {
            period: "Feb. 2026 - May. 2026",
            title: "Automated Sales Agent Developer",
            company: "M&T Inversiones",
            description: [
                "Design and implementation of an AI-powered automated sales agent for customer service.",
                "Integration of the agent with communication channels to automate the sales process.",
            ],
        },
        {
            period: "Feb. 2025 - Mar. 2026",
            title: "Software Development Intern",
            company: "Cámara de Industriales del Estado Carabobo",
            description: [
                "Development of automation and AI solutions, natural language bots.",
                "Desktop applications.",
                "Implementation of an automated news system to keep members informed.",
                "Supervised technical support for advertising at the National Fedecámaras Assembly.",
            ],
        },
        {
            period: "Apr. 2024 - Jul. 2024",
            title: "Programming Instructor",
            company: "Benllisoft",
            description: [
                "Taught students the fundamentals of programming and software development.",
                "Designed and delivered lessons on various technologies and programming languages.",
            ],
        },
        {
            period: "Aug. 2022 - Apr. 2024",
            title: "Web, Mobile & Game Developer",
            company: "AxexAcademy / Axex eSports",
            description: [
                "Developed and maintained the main web platform using Svelte and Tailwind CSS.",
                "Built cross-platform mobile applications with Flutter and Firebase.",
                "Participated in game development using C# and Unity.",
            ],
        },
        {
            period: "Feb. 2021 - Dec. 2021",
            title: "Customer Service",
            company: "Inter Cauchos C.A",
            description: [
                "Provided direct customer support, resolving inquiries and needs.",
                "Managed customer flow and ensured a positive service experience.",
            ],
        },
    ],
    education: [
        {
            icon: "school",
            period: "2022 - 2025",
            title: "Associate Degree in Computer Science",
            subtitle: "IUTEPAL: Instituto Tecnológico 'Juan Pablo Pérez Alfonzo'",
        },
        {
            icon: "school",
            period: "2017 - 2021",
            title: "Industrial High School Diploma",
            subtitle: "Liceo de Tecnología Industrial 'LITIN'",
        },
    ],
    training: [
        {
            title: "Udacity: Intro to HTML & CSS",
            description: "Courses covering HTML and CSS syntax and functionality.",
        },
        {
            title: "Udemy: Web Developer Bootcamp",
            description: "Full-stack web application development with HTML, CSS, JavaScript, Python, and Django.",
        },
        {
            title: "Social Oplesk: Full Stack Bootcamp, Python + React",
            description: "Python fundamentals and syntax for various applications.",
        },
    ],
    skills: {
        strong: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Vite", "Python", "Django", "PostgreSQL", "Docker", "Supabase", "Firebase", "n8n", "Autonomous Agents", "Effective Use of AI Tools", "Webhooks & Workflows", "AI Bots", "Flutter", "C#"],
        basic: ["MySQL", "SQL Server Management Studio", "Java (Android Studio)", "GOlang", "Svelte JS", "Tauri", "Bootstrap", "PHP", "Rust"],
        languages: [
            { flag: "🇪🇸", lang: "Spanish", level: "Native" },
            { flag: "🇬🇧", lang: "English", level: "Fluent" },
        ],
    },
    contact: {
        location: "Valencia - Carabobo, Venezuela",
        email: "ferlpzwork65ds@gmail.com",
        phone: "+58 4244358426",
        links: [
            {
                name: "linkedin",
                href: "https://www.linkedin.com/in/fermin-chirinos-491770253/",
                text: "LinkedIn",
                icon: linkedInIcon,
            },
            {
                name: "github",
                href: "https://github.com/Police65",
                text: "GitHub",
                icon: githubIcon,
            },
        ],
    },
};