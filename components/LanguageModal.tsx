import React, { useEffect, useState } from 'react';
import type { Lang } from '../i18n';

interface LanguageModalProps {
  onSelect: (lang: Lang) => void;
  defaultLang?: Lang;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onSelect, defaultLang }) => {
  const [visible, setVisible] = useState(false);
  const [hoveredLang, setHoveredLang] = useState<Lang | null>(null);

  useEffect(() => {
    // Trigger entrance animation
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleSelect = (lang: Lang) => {
    setVisible(false);
    setTimeout(() => onSelect(lang), 350);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        transition: 'opacity 0.35s ease',
        opacity: visible ? 1 : 0,
        overflow: 'hidden',
      }}
    >
      {/* Animated background blobs */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(17,114,212,0.25) 0%, transparent 70%)',
        top: '-10%', left: '-10%', animation: 'blobFloat1 8s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
        bottom: '-10%', right: '-5%', animation: 'blobFloat2 10s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)',
        top: '40%', right: '20%', animation: 'blobFloat1 12s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.97); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 25px) scale(1.03); }
          66% { transform: translate(15px, -15px) scale(0.98); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .lang-card {
          cursor: pointer;
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          border: 2px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          flex: 1;
          min-width: 140px;
          max-width: 200px;
        }
        .lang-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(17,114,212,0.8);
          background: rgba(17,114,212,0.18);
          box-shadow: 0 20px 60px rgba(17,114,212,0.35);
        }
        .lang-card.hovered-es:hover {
          border-color: rgba(231,76,60,0.7);
          background: rgba(231,76,60,0.12);
          box-shadow: 0 20px 60px rgba(231,76,60,0.25);
        }
        .lang-card-active {
          border-color: rgba(17,114,212,0.6) !important;
          background: rgba(17,114,212,0.15) !important;
        }
      `}</style>

      {/* Card container */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
        padding: '0 24px',
        maxWidth: 560,
        width: '100%',
        animation: 'fadeUp 0.6s ease forwards',
      }}>
        {/* Logo / Avatar hint */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'linear-gradient(135deg, #1172d4, #6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 0 4px rgba(17,114,212,0.25), 0 0 0 8px rgba(17,114,212,0.1)',
            fontSize: 32,
          }}>
            👤
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}>
              Fermin Chirinos
            </h1>
            <p style={{
              margin: '6px 0 0',
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Interactive CV · Curriculum Vitae
            </p>
          </div>
        </div>

        {/* Bilingual message */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.92)',
            lineHeight: 1.5,
          }}>
            Choose your language
          </p>
          <p style={{
            margin: '4px 0 0',
            fontSize: 18,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.5,
          }}>
            Elige tu idioma
          </p>
          <div style={{
            marginTop: 12,
            height: 2,
            width: 60,
            margin: '12px auto 0',
            background: 'linear-gradient(90deg, #1172d4, #6366f1)',
            borderRadius: 2,
          }} />
        </div>

        {/* Language buttons */}
        <div style={{
          display: 'flex',
          gap: 20,
          width: '100%',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {/* Spanish */}
          <button
            className={`lang-card hovered-es${defaultLang === 'es' ? ' lang-card-active' : ''}`}
            onClick={() => handleSelect('es')}
            onMouseEnter={() => setHoveredLang('es')}
            onMouseLeave={() => setHoveredLang(null)}
            style={{ border: 'none', outline: 'none', fontFamily: 'inherit' }}
          >
            <span style={{ fontSize: 52, lineHeight: 1 }}>🇪🇸</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                Español
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em' }}>
                Spanish
              </div>
            </div>
            {defaultLang === 'es' && (
              <div style={{
                background: 'rgba(17,114,212,0.4)',
                borderRadius: 20,
                padding: '2px 10px',
                fontSize: 11,
                color: '#93c5fd',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}>
                Última · Last
              </div>
            )}
          </button>

          {/* English */}
          <button
            className={`lang-card${defaultLang === 'en' ? ' lang-card-active' : ''}`}
            onClick={() => handleSelect('en')}
            onMouseEnter={() => setHoveredLang('en')}
            onMouseLeave={() => setHoveredLang(null)}
            style={{ border: 'none', outline: 'none', fontFamily: 'inherit' }}
          >
            <span style={{ fontSize: 52, lineHeight: 1 }}>🇬🇧</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                English
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em' }}>
                Inglés
              </div>
            </div>
            {defaultLang === 'en' && (
              <div style={{
                background: 'rgba(17,114,212,0.4)',
                borderRadius: 20,
                padding: '2px 10px',
                fontSize: 11,
                color: '#93c5fd',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}>
                Última · Last
              </div>
            )}
          </button>
        </div>

        {/* Footer hint */}
        <p style={{
          margin: 0,
          fontSize: 12,
          color: 'rgba(255,255,255,0.3)',
          textAlign: 'center',
          lineHeight: 1.6,
        }}>
          Podrás cambiar el idioma en cualquier momento · You can change the language at any time
        </p>
      </div>
    </div>
  );
};

export default LanguageModal;