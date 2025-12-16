
import { GoogleGenAI } from "@google/genai";
import { destinations } from "../data/destinations";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let cachedSystemInstruction: string | null = null;

// Optimized: Generate context once and cache it
const getSystemInstruction = () => {
  if (cachedSystemInstruction) return cachedSystemInstruction;

  const ukUniversities = destinations.find(d => d.id === 'uk')?.universities || [];
  
  // Compact context string construction
  const uniContext = ukUniversities.map(u => `
Uni: ${u.name}
Loc: ${u.location || 'N/A'}
Fee: ${u.tuitionFee || 'N/A'} | Schol: ${u.scholarship || 'N/A'} | Intake: ${u.intake || 'N/A'}
`).join('\n');

  cachedSystemInstruction = `You are an expert counselor for "Brighton Career Consultants". 
Your tone is professional, encouraging, and helpful.

Database (UK Unis):
${uniContext}

Offices: Kathmandu (01-5909351), Chitwan, Jhapa.
Services: Counseling, IELTS/PTE, Visa.

Instructions:
1. Use the database for specific uni info.
2. Use Google Search for current news/visa rules or unis not in database.
3. Be concise.`;

  return cachedSystemInstruction;
};

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<{text: string, sources?: {title: string, uri: string}[]}> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
        tools: [{googleSearch: {}}] 
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    
    const sources = result.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map(chunk => chunk.web)
      .filter(web => web && web.uri && web.title) as {title: string, uri: string}[];

    const uniqueSources = sources ? Array.from(new Map(sources.map(s => [s.uri, s])).values()) : [];

    return { 
        text: result.text || "I'm sorry, I couldn't process that request.",
        sources: uniqueSources
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "I'm having trouble connecting to the server right now. Please try again later." };
  }
};

export const generateInterviewAnswer = async (
  studentName: string,
  course: string,
  university: string,
  question: string,
  background: string
): Promise<string> => {
  try {
    const prompt = `
      Act as a UK Visa Interview Coach.
      Student: ${studentName}
      Course: ${course}
      Uni: ${university}
      Background: ${background || 'N/A'}

      Question(s): ${question}
      
      Provide response in First Person ("I...").
      Format:
      **1. Question Text**
      - Bullet point answer
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate an answer. Please try again.";
  } catch (error) {
    console.error("Gemini API Error (Interview):", error);
    return "Error generating answer. Please check your connection.";
  }
};