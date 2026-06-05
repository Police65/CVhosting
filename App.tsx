import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Training from './components/Training';
import CvPdfDocument from './components/CvPdfDocument';
import LanguageModal from './components/LanguageModal';
// NOTA: AIAssistant está deshabilitado por costo operativo. Para reactivarlo:
// import AIAssistant from './components/AIAssistant';
// y añadir <AIAssistant cvContext={JSON.stringify(resumeData)} /> dentro del JSX
import { LangProvider, useLang } from './LangContext';
import { labels, resumeDataEs, resumeDataEn } from './i18n';
import type { Lang } from './i18n';
import { pdf } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import type { ResumeData } from './types';
import { imageUrls } from './assets';


const AppContent: React.FC = () => {
    const { lang, setLang } = useLang();
    const [isContentLoaded, setIsContentLoaded] = useState(false);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    // Always show the language modal on page load
    const [showLangModal, setShowLangModal] = useState(true);
    const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
    // Remember the last selected language (to highlight it in the modal)
    const lastSavedLang = localStorage.getItem('lang') as Lang | null;

    const t = labels[lang];
    const resumeData = lang === 'en' ? resumeDataEn : resumeDataEs;

    useEffect(() => {
        if (showLangModal) return;
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

        const timer = setTimeout(() => setIsContentLoaded(true), 100);

        return () => {
            clearTimeout(timer);
            elementsToAnimate.forEach(el => observer.unobserve(el));
        };
    }, [showLangModal, lang]);

    const handleLangSelect = (selectedLang: Lang) => {
        setLang(selectedLang);
        setShowLangModal(false);
    };

    const generatePdf = useCallback(async (pdfLang: Lang) => {
        setIsGeneratingPdf(true);
        setShowDownloadDropdown(false);
        try {
            const data = pdfLang === 'en' ? resumeDataEn : resumeDataEs;
            // Use absolute URL for the avatar so react-pdf can load it correctly in browser
            const dataWithAbsoluteAvatar = {
                ...data,
                avatarUrl: `${window.location.origin}/avatar.jpeg`,
            };
            console.log('[PDF] Generating in language:', pdfLang, '| Title:', data.title);
            const qrDataUrl = await QRCode.toDataURL('https://fermincv.onrender.com', {
                width: 224,
                margin: 1,
                color: { dark: '#1e293b', light: '#ffffff' },
            });

            // Each call to pdf(doc) creates a fresh instance – no caching issues
            const blob = await pdf(
                <CvPdfDocument data={dataWithAbsoluteAvatar} qrDataUrl={qrDataUrl} lang={pdfLang} />
            ).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `CV_${data.name.replace(' ', '_')}_${pdfLang.toUpperCase()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('PDF generation failed:', err);
        } finally {
            setIsGeneratingPdf(false);
        }
    }, []);

    const navLinks = [
        { href: '#about', text: t.navAbout },
        { href: '#experience', text: t.navExperience },
        { href: '#skills', text: t.navSkills },
        { href: '#education', text: t.navEducation },
        { href: '#contact', text: t.navContact },
    ];

    return (
        <>
            {showLangModal && <LanguageModal onSelect={handleLangSelect} defaultLang={lastSavedLang ?? undefined} />}
            <div id="cv-content" className="font-sans">
                <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
                    <div className="layout-container flex h-full grow flex-col">
                        <Header navLinks={navLinks} />
                        <main className="flex-1 px-4 py-10 md:px-20 lg:px-40">
                            <div className={`cv-card mx-auto max-w-5xl rounded-2xl bg-slate-50/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-12 ${isContentLoaded ? 'loaded' : ''}`}>
                                <About
                                    name={resumeData.name}
                                    title={resumeData.title}
                                    about={resumeData.about}
                                    avatarUrl={resumeData.avatarUrl}
                                />
                                <div className="mt-16 space-y-16">
                                    <Experience title={t.sectionExperience} items={resumeData.experience} />
                                    <Skills
                                        skills={resumeData.skills}
                                        title={t.sectionSkills}
                                        technicalLabel={t.sectionSkillsTechnical}
                                        languagesLabel={t.sectionSkillsLanguages}
                                    />
                                    <Education title={t.sectionEducation} items={resumeData.education} />
                                    <Training title={t.sectionTraining} items={resumeData.training} />
                                    <div id="download-cv-section" className="mt-20 text-center fade-in-element">
                                        <div className="relative inline-block">
                                            <button
                                                onClick={() => setShowDownloadDropdown(!showDownloadDropdown)}
                                                disabled={isGeneratingPdf}
                                                className="inline-flex items-center gap-2 rounded-md bg-[#1172d4] px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <span className="material-symbols-outlined">download</span>
                                                {isGeneratingPdf ? t.sectionDownloadGenerating : t.sectionDownload}
                                                <span className="material-symbols-outlined text-lg">expand_more</span>
                                            </button>

                                            {showDownloadDropdown && (
                                                <div className="absolute left-0 top-full mt-2 z-50 flex flex-col rounded-lg border border-slate-200 bg-white shadow-lg overflow-hidden">
                                                    <button
                                                        onClick={() => generatePdf('es')}
                                                        className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
                                                    >
                                                        🇪🇸 Español
                                                    </button>
                                                    <button
                                                        onClick={() => generatePdf('en')}
                                                        className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
                                                    >
                                                        🇬🇧 English
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <Contact
                                        email={resumeData.contact.email}
                                        phone={resumeData.contact.phone}
                                        links={resumeData.contact.links}
                                    />
                                </div>
                            </div>
                        </main>
                        <Footer name={resumeData.name} rightsText={t.footerRights} />
                    </div>
                </div>
            </div>
        </>
    );
};

const App: React.FC = () => {
    return (
        <LangProvider>
            <AppContent />
        </LangProvider>
    );
};

export default App;