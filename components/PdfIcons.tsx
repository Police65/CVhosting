import React from 'react';

const iconProps = {
    className: "w-5 h-5 text-slate-300 flex-shrink-0",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
};

export const MailIcon = () => (
    <svg {...iconProps} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const PhoneIcon = () => (
    <svg {...iconProps} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.219-.995-.61-1.383l-2.433-2.433a2.25 2.25 0 00-3.182 0l-1.35 1.35a1.125 1.125 0 01-1.582 0l-2.828-2.828a1.125 1.125 0 010-1.582l1.35-1.35a2.25 2.25 0 000-3.182L7.614 3.61a2.25 2.25 0 00-1.383-.61H3.75A2.25 2.25 0 001.5 5.25v1.5z" />
    </svg>
);

export const LocationIcon = () => (
    <svg {...iconProps} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);
