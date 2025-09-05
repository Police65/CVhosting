// config.ts

/**
 * Este archivo centraliza todas las claves de API y configuraciones.
 * Lee las variables desde un archivo .env local utilizando import.meta.env,
 * que es el método estándar y seguro para proyectos basados en Vite.
 */

// Declaración de tipos para enseñarle a TypeScript sobre las variables de entorno de Vite.
// Esto soluciona el error: "Property 'env' does not exist on type 'ImportMeta'".
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

/**
 * Configuración para el servicio de Gemini.
 */
export const geminiConfig = {
  apiKey: GEMINI_API_KEY,
};

/**
 * Configuración para el servicio de Supabase.
 */
export const supabaseConfig = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
};

// Advertencia en la consola si alguna clave crucial no se encuentra.
if (!GEMINI_API_KEY) {
  console.warn("ADVERTENCIA: La clave de API de Gemini (VITE_GEMINI_API_KEY) no se encontró en el archivo .env. El asistente de IA no funcionará.");
}
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn("ADVERTENCIA: Las credenciales de Supabase (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) no se encontraron en el archivo .env. El tracking de analíticas no funcionará.");
}
