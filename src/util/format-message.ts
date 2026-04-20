import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function formatMessage(message: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        "Formate a seguinte mensagem para enviar ao whatsapp como uma promoção. Começando pelo Título, preço e o Link com quebras de linha entre os campos e adicione emojis para chamar atenção e ficar bonito visualmente. Envie apenas a mensagem formatada e nada mais. mensagem: " +
        message,
    });
    if (response.text != undefined) {
      return response.text;
    } else {
      throw new Error("A API do Gemini não está respondendo");
    }
  } catch (error) {
    return message;
  }
}
