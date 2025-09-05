import React from 'react';

interface AboutProps {
    name: string;
    title: string;
    about: string;
    avatarUrl: string;
}

const About: React.FC<AboutProps> = ({ name, title, about, avatarUrl }) => {
    return (
        <section id="about" className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-shrink-0">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="size-40 rounded-full border-4 border-slate-200 object-cover shadow-md"
                />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    {name}
                </h1>
                <h2 className="mt-2 text-xl font-medium tracking-tight text-slate-600">
                    {title}
                </h2>
                <p className="mt-6 max-w-2xl text-base text-slate-700">
                    {about}
                </p>
            </div>
        </section>
    );
};

export default About;
