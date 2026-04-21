import React from 'react';
import type { ContactLink as ContactLinkData } from '../types';

interface ContactProps {
    email: string;
    phone: string;
    links: ContactLinkData[];
}

const ContactItem: React.FC<{ href: string; icon: React.ReactNode; title: string; subtitle: string; className?: string; style?: React.CSSProperties }> =
({ href, icon, title, subtitle, className, style }) => (
    <a
        href={href}
        className={`flex items-center gap-4 rounded-lg bg-slate-100 p-4 transition-all duration-200 hover:bg-slate-200 hover:scale-105 ${className || ''}`}
        style={style}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-200 text-slate-600">
            {icon}
        </div>
        <div>
            <p className="font-semibold text-slate-800">{title}</p>
            <p className="text-sm text-slate-500 truncate">{subtitle}</p>
        </div>
    </a>
);


const Contact: React.FC<ContactProps> = ({ email, phone, links }) => {
    const contactItems = [
        {
            href: `mailto:${email}`,
            icon: <span className="material-symbols-outlined text-2xl">mail</span>,
            title: "Email",
            subtitle: email
        },
        {
            href: `tel:${phone.replace(/\s/g, '')}`,
            icon: <span className="material-symbols-outlined text-2xl">phone</span>,
            title: "Teléfono",
            subtitle: phone
        },
        ...links.map(link => ({
            href: link.href,
            icon: link.icon,
            title: link.text,
            subtitle: link.href.replace(/^https?:\/\//, '')
        }))
    ];

    return (
        <section id="contact" className="fade-in-element">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contacto</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactItems.map((item, index) => (
                    <ContactItem
                        key={item.title}
                        {...item}
                        className="fade-in-element"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Contact;