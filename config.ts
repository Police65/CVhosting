
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_GEMINI_API_KEY: string;
      readonly VITE_SUPABASE_URL: string;
      readonly VITE_SUPABASE_ANON_KEY: string;
    }
  }
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";


export const geminiConfig = {
  apiKey: GEMINI_API_KEY,
};

export const supabaseConfig = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
};


if (!GEMINI_API_KEY) {
  console.warn("ADVERTENCIA: La clave de API de Gemini (VITE_GEMINI_API_KEY) no se encontró en el archivo .env. El asistente de IA no funcionará.");
}
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn("ADVERTENCIA: Las credenciales de Supabase (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) no se encontraron en el archivo .env. El tracking de analíticas no funcionará.");
}
