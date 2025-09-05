import React from 'react';

interface HeaderProps {
    onTrackClick: (elementName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onTrackClick }) => {
    const navLinks = [
        { href: '#about', text: 'Sobre mí' },
        { href: '#experience', text: 'Experiencia' },
        { href: '#skills', text: 'Habilidades' },
        { href: '#education', text: 'Educación' },
        { href: '#contact', text: 'Contacto' },
    ];

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-slate-50/90 backdrop-blur-lg">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-end px-4 md:px-20 lg:px-40">
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => onTrackClick(`nav_${link.text.toLowerCase()}`)}
                            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
