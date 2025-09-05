import React from 'react';
import type { ResumeData } from '../types';
import { MailIcon, PhoneIcon, LocationIcon } from './PdfIcons';

const qrCodeUrl = "https://nkwlaqmbnaftpykkkhss.supabase.co/storage/v1/object/sign/images/myqrcode_39033.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjJmZjYwZi1kZGZlLTQzZDAtOTNhZi0xYzNiYjJkZjgwMzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvbXlxcmNvZGVfMzkwMzMucG5nIiwiaWF0IjoxNzU3MDM4MDU1LCJleHAiOjMzMjkzMDM4MDU1fQ.Tzb1odq9HchYdmP6Fq8eK8fNYe8GvbLctwY3ubN-Zcw";

const PdfLayout: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div id="pdf-render-content" style={{ width: '794px', height: '1123px' }} className="flex font-sans text-sm bg-white">
      {/* Left Column */}
      <aside className="w-[35%] bg-slate-800 text-white p-8 flex flex-col">
        {/* Main content of the sidebar */}
        <div>
          <div className="text-center">
            <img src={data.avatarUrl} alt={data.name} className="rounded-full size-36 border-4 border-slate-500 mb-4 mx-auto" />
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <h2 className="text-md text-slate-300 mt-1">{data.title}</h2>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-slate-500 pb-2 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MailIcon /> <span className="break-all">{data.contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon /> <span>{data.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <LocationIcon /> <span>{data.contact.location}</span>
              </li>
              {data.contact.links.map(link => (
                <li key={link.name} className="flex items-start gap-3">
                  <span className="w-5 h-5 flex-shrink-0">{link.icon}</span>
                  <a href={link.href} className="break-all text-slate-300 hover:text-white">{link.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-slate-500 pb-2 mb-4">Habilidades</h3>
            <div className="flex flex-wrap">
              {[...data.skills.strong, ...data.skills.basic].map(skill => (
                <span key={skill} className="inline-block bg-slate-600 text-slate-100 text-xs font-medium px-3 py-1 rounded mr-2 mb-2">
                  <span style={{ position: 'relative', top: '-4px' }}>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-slate-500 pb-2 mb-4">Idiomas</h3>
            <ul className="space-y-2 text-sm">
              {data.skills.languages.map(lang => (
                <li key={lang.lang} className="flex justify-between">
                  <span>{lang.lang}</span>
                  <span className="font-medium text-slate-400">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* QR Code section pushed to the bottom */}
        <div className="mt-auto text-center pt-6">
          <img src={qrCodeUrl} alt="QR Code" className="w-28 h-28 mx-auto border-4 border-slate-500 rounded-lg" />
          <p className="text-xs text-slate-400 mt-2">Visita mi CV Interactivo</p>
        </div>
      </aside>

      {/* Right Column */}
      <main className="w-[65%] p-8 text-slate-800 overflow-y-auto">
        <section>
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider border-b-2 border-slate-200 pb-2 mb-6">Formación y Experiencia</h2>

          {/* Experience */}
          {data.experience.map((item, index) => (
            <div key={`exp-${index}`} className="mb-6">
              <p className="font-bold text-lg text-slate-700">{item.title}</p>
              <p className="text-sm font-semibold text-slate-500 mb-1">{item.company} | {item.period}</p>
              <ul className="list-disc pl-5 text-s text-slate-550 space-y-0">
                {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
            </div>
          ))}

          {/* Education */}
          <div className="mt-6 border-t border-slate-200 pt-6">
            <h3 className="text-xl font-bold text-slate-700 mb-4">Educación</h3>
            {data.education.map((item, index) => (
              <div key={`edu-${index}`} className="mb-4">
                <p className="font-bold text-base text-slate-700">{item.title}</p>
                <p className="text-sm text-slate-600">{item.subtitle} | {item.period}</p>
              </div>
            ))}
          </div>

          {/* Training */}
          <div className="mt-6 border-t border-slate-200 pt-6">
            <h3 className="text-xl font-bold text-slate-700 mb-4">Cursos y Formación</h3>
            {data.training.map((item, index) => (
              <div key={`trn-${index}`} className="mb-4">
                <p className="font-bold text-base text-slate-700">{item.title}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PdfLayout;