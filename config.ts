
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_GEMINI_API_KEY: string;
    }
  }
}

// NOTA: La API key se deja vacía intencionalmente. El asistente de IA (AIAssistant)
// está deshabilitado por costo operativo. Para reactivarlo, configurar VITE_GEMINI_API_KEY
// en el archivo .env y montar el componente AIAssistant en App.tsx.
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const geminiConfig = {
  apiKey: GEMINI_API_KEY,
};

if (!GEMINI_API_KEY) {
  console.warn("ADVERTENCIA: La clave de API de Gemini (VITE_GEMINI_API_KEY) no se encontró en el archivo .env. El asistente de IA no funcionará.");
}
