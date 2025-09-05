import { GoogleGenAI } from "@google/genai";
import { geminiConfig } from '../config'; // Importar desde el archivo de configuración

let ai: GoogleGenAI | null = null;

if (geminiConfig.apiKey) {
    ai = new GoogleGenAI({ apiKey: geminiConfig.apiKey });
} else {
    console.warn("Gemini API key not found. AI Assistant will be disabled.");
}

export const askAssistant = async (question: string, context: string): Promise<string> => {
    if (!ai) {
        return "Lo siento, el asistente de IA no está configurado correctamente. Falta una clave de API.";
    }
    
    try {
        const systemInstruction = `Eres un asistente servicial para el currículum de Fermin Chirinos. Tu única fuente de conocimiento es el siguiente texto del currículum. Responde las preguntas basándote ÚNICAMENTE en este texto. Si la respuesta no se encuentra en el texto, di amablemente que no tienes esa información. Sé conciso y profesional. No inventes información. El currículum está en formato JSON a continuación:\n\n${context}`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question,
            config: {
                systemInstruction,
                temperature: 0.2,
                topP: 0.8,
                topK: 10,
            }
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Lo siento, estoy teniendo problemas para conectarme. Por favor, inténtalo de nuevo más tarde.";
    }
};
