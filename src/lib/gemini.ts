import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GEMINI,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export const main = async () => {
  const response = await openai.chat.completions.create({
    model: "gemini-2.5-flash",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "Explain to me how AI works",
      },
    ],
  });
  console.log(response.choices[0].message);
};

