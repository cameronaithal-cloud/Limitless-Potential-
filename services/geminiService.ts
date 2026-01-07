
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants.tsx";

const SYSTEM_INSTRUCTION = `
You are the "Velocity Sports" Elite Performance AI. 
Your primary goal is to provide expert gear recommendations and athletic advice.

Catalog Reference:
${JSON.stringify(PRODUCTS)}

Tone: Professional, high-energy, and encouraging.
Format: Use clean Markdown for readability.

Strategy:
1. Always suggest products from our catalog when relevant.
2. If we don't carry a specific item, suggest our high-performance alternatives.
3. Mention specific features like "Carbon Plates" or "Breathable Mesh" to build trust.
`;

export const getAIResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // Create new instance per request for maximum reliability with dynamic environment keys
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // Optimal balance of speed and reasoning
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.65, // Balanced for consistent professional advice
      },
    });

    return response.text || "I'm sorry, I'm currently fine-tuning my sports knowledge. How else can I help you today?";
  } catch (error) {
    console.error("Velocity AI Error:", error);
    // Graceful fallback prevents the chat UI from breaking
    return "Our AI specialist is currently in training. Please check our product categories for the best gear, or try again in a moment!";
  }
};
