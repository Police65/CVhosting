
import { GoogleGenAI } from "@google/genai";

// Fix: Aligned with @google/genai guidelines by initializing the client
// directly with `process.env.API_KEY` and removing the explicit null check.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAssistant = async (question: string, context: string): Promise<string> => {
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