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
    // Correct initialization: Named parameter 'apiKey' is required.
    // process.env.API_KEY is injected by the host environment.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Directly access .text property as per latest SDK rules.
    return response.text || "I'm having trouble connecting to the locker room right now. How else can I help?";
  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "Our AI coach is currently on a break. Please browse our collections manually!";
  }
};