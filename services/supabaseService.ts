import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { parseUserAgent } from '../utils/userAgentParser';
import { supabaseConfig } from '../config'; // Importar desde el archivo de configuración

let supabase: SupabaseClient | null = null;

if (supabaseConfig.url && supabaseConfig.anonKey) {
  supabase = createClient(supabaseConfig.url, supabaseConfig.anonKey);
} else {
  console.warn("Supabase credentials not found. Analytics will be disabled.");
}

/**
 * Tracks a page visit by calling a normalized Supabase RPC function.
 * This function finds or creates a unique visitor, then logs a new visit.
 * @returns The ID of the visit record, or null if tracking fails.
 */
export const trackVisit = async (): Promise<number | null> => {
    if (!supabase) return null; // No hacer nada si Supabase no está configurado
    try {
        const { browser, os, device } = parseUserAgent();
        // This RPC function 'track_visit_normalized' must be created in your Supabase SQL Editor.
        // It securely logs the visitor and visit, then returns the new visit's ID.
        const { data, error } = await supabase.rpc('track_visit_normalized', {
            p_path: window.location.pathname,
            p_user_agent: navigator.userAgent,
            p_browser: browser,
            p_os: os,
            p_device_type: device,
        });

        if (error) {
            console.error("Error tracking visit via RPC:", error.message);
            return null;
        }
        return data;
    } catch (err) {
        console.error("An unexpected error occurred while tracking visit:", err);
        return null;
    }
};

/**
 * Tracks a click event on a specific element, associating it with a visit.
 * @param elementName - A unique identifier for the clicked element.
 * @param visitId - The ID of the current user's visit.
 */
export const trackClick = async (elementName: string, visitId: number): Promise<void> => {
    if (!supabase || !visitId) return;
    try {
        const { error } = await supabase.from('clicks').insert({
            element_name: elementName,
            visit_id: visitId,
        });
        if (error) {
            console.error("Error tracking click:", error.message);
        }
    } catch (err) {
        console.error("An unexpected error occurred while tracking click:", err);
    }
};
