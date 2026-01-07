
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants.tsx";

const SYSTEM_INSTRUCTION = `
You are the "Velocity Sports" AI Assistant. Your goal is to help customers find the perfect sports gear.
Here is the catalog of products we sell:
${JSON.stringify(PRODUCTS)}

Guidelines:
1. Be professional, enthusiastic, and knowledgeable about sports.
2. Recommend specific products from the list above based on user needs.
3. If a user asks about a sport we don't have equipment for, suggest the closest alternative.
4. Keep responses concise and formatted in Markdown.
`;

export const getAIResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
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

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my sports database right now.";
  }
};
