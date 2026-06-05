import React from 'react';

interface FooterProps {
    name: string;
    rightsText: string;
}

const Footer: React.FC<FooterProps> = ({ name, rightsText }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center py-8">
            <p className="text-sm text-slate-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.5)]">
                &copy; {currentYear} {name}. {rightsText}
            </p>
        </footer>
    );
};

export default Footer;