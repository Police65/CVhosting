
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_GEMINI_API_KEY: string;
    }
  }
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const geminiConfig = {
  apiKey: GEMINI_API_KEY,
};

if (!GEMINI_API_KEY) {
  console.warn("ADVERTENCIA: La clave de API de Gemini (VITE_GEMINI_API_KEY) no se encontró en el archivo .env. El asistente de IA no funcionará.");
}
