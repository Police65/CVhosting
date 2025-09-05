
import React from 'react';
import type { ContactLink as ContactLinkData } from '../types';

interface ContactProps {
    email: string;
    phone: string;
    links: ContactLinkData[];
    onTrackClick: (name: string) => void;
}

const ContactLink: React.FC<{ link: ContactLinkData; onTrackClick: (name: string) => void }> = ({ link, onTrackClick }) => (
    <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onTrackClick(link.name)}
        className="flex items-center gap-4 rounded-lg bg-slate-100 p-4 transition-colors hover:bg-slate-200"
    >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-200 text-slate-600">
            {link.icon}
        </div>
        <div>
            <p className="font-semibold text-slate-800">{link.text}</p>
            <p className="text-sm text-slate-500 truncate">{link.href.replace(/^https?:\/\//, '')}</p>
        </div>
    </a>
);

const Contact: React.FC<ContactProps> = ({ email, phone, links, onTrackClick }) => {
    return (
        <section id="contact">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contacto</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <a
                    href={`mailto:${email}`}
                    onClick={() => onTrackClick('contact_email')}
                    className="flex items-center gap-4 rounded-lg bg-slate-100 p-4 transition-colors hover:bg-slate-200"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-200 text-slate-600">
                        <span className="material-symbols-outlined text-2xl">mail</span>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-800">Email</p>
                        <p className="text-sm text-slate-500">{email}</p>
                    </div>
                </a>
                <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    onClick={() => onTrackClick('contact_phone')}
                    className="flex items-center gap-4 rounded-lg bg-slate-100 p-4 transition-colors hover:bg-slate-200"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-200 text-slate-600">
                        <span className="material-symbols-outlined text-2xl">phone</span>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-800">Teléfono</p>
                        <p className="text-sm text-slate-500">{phone}</p>
                    </div>
                </a>
                {links.map((link, index) => (
                    <ContactLink key={index} link={link} onTrackClick={onTrackClick} />
                ))}
            </div>
        </section>
    );
};

export default Contact;
