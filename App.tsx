import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Training from './components/Training';
import CvPdfDocument from './components/CvPdfDocument';
import { pdf } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import type { ResumeData } from './types';
import { imageUrls } from './assets';


const resumeData: ResumeData = {
    name: "Fermin Chirinos",
    title: "Desarrollador de Software y Automatización con IA",
    avatarUrl: imageUrls.avatar,
    about: "Hola, soy Fermin Chirinos. T.S.U. en Informática egresado de IUTEPAL y un apasionado desarrollador con un fuerte enfoque en automatizaciones, agentes autónomos y soluciones que emplean inteligencia artificial. Mi especialidad es crear herramientas eficientes como bots de atención al público con IA, flujos de trabajo automatizados y sistemas de acciones automáticas. También programas de escritorio y apps. Me encantan los retos, estoy siempre aprendiendo y me dedico por completo a mi trabajo.",
    experience: [
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
                "Diseñé y impartí lecciones sobre diversas tecnologías y lenguajes de programación.",
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
        strong: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Vite", "PostgreSQL", "Supabase", "Firebase", "n8n", "Agentes Autónomos", "Uso adecuado de herramientas de IA", "Webhooks y Flujos de Trabajo", "Bots con IA", "Flutter", "C#"],
        basic: ["MySQL", "SQL Server Management Studio", "Python", "Java (Android Studio)", "GOlang", "Svelte JS", "Tauri", "Bootstrap", "PHP", "Rust"],
        languages: [
            { flag: "🇪🇸", lang: "Español", level: "Nativo" },
            { flag: "🇬🇧", lang: "Inglés", level: "Fluido" },
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
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            },
            {
                name: "github",
                href: "https://github.com/Police65",
                text: "GitHub",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            },
        ],
    },
};

const App: React.FC = () => {
    const [isContentLoaded, setIsContentLoaded] = useState(false);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    useEffect(() => {
        // Animation observer for fade-in elements
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const elementsToAnimate = document.querySelectorAll('.fade-in-element');
        elementsToAnimate.forEach(el => observer.observe(el));

        // Initial load animation trigger
        const timer = setTimeout(() => setIsContentLoaded(true), 100);

        // Cleanup
        return () => {
            clearTimeout(timer);
            elementsToAnimate.forEach(el => observer.unobserve(el));
        };
    }, []);

    const generatePdf = async () => {
        if (isGeneratingPdf) return;
        setIsGeneratingPdf(true);
        try {
            const qrDataUrl = await QRCode.toDataURL('https://fermincv.onrender.com', {
                width: 224,
                margin: 1,
                color: { dark: '#1e293b', light: '#ffffff' },
            });

            const doc = <CvPdfDocument data={resumeData} qrDataUrl={qrDataUrl} />;
            const blob = await pdf(doc).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `CV_${resumeData.name.replace(' ', '_')}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('PDF generation failed:', err);
        } finally {
            setIsGeneratingPdf(false);
        }
    };


    return (
        <div id="cv-content" className="font-sans">
            <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <Header />
                    <main className="flex-1 px-4 py-10 md:px-20 lg:px-40">
                        <div className={`cv-card mx-auto max-w-5xl rounded-2xl bg-slate-50/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-12 ${isContentLoaded ? 'loaded' : ''}`}>
                            <About
                                name={resumeData.name}
                                title={resumeData.title}
                                about={resumeData.about}
                                avatarUrl={resumeData.avatarUrl}
                            />
                            <div className="mt-16 space-y-16">
                                <Experience title="Experiencia Laboral" items={resumeData.experience} />
                                <Skills skills={resumeData.skills} />
                                <Education title="Educación" items={resumeData.education} />
                                <Training title="Formación Adicional" items={resumeData.training} />
                                <div id="download-cv-section" className="mt-20 text-center fade-in-element">
                                    <button
                                        onClick={generatePdf}
                                        disabled={isGeneratingPdf}
                                        className="inline-flex items-center gap-2 rounded-md bg-[#1172d4] px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="material-symbols-outlined">download</span>
                                        {isGeneratingPdf ? 'Generando...' : 'Descargar CV'}
                                    </button>
                                </div>
                                <Contact
                                    email={resumeData.contact.email}
                                    phone={resumeData.contact.phone}
                                    links={resumeData.contact.links}
                                />
                            </div>
                        </div>
                    </main>
                    <Footer name={resumeData.name} />
                </div>
            </div>
        </div>
    );
};

export default App;