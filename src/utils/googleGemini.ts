import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
type askTextStreamDto = {
  message: string;
}
const MODEL_NAME = 'gemini-pro';
const API_KEY = 'AIzaSyAu-pCPxcMj3RnxSwu7n-oJ3k4K35IocwE';

export async function askGemini(askPrompt: askTextStreamDto) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [{ text: askPrompt.message }];

  // const result = await model.generateContent({
  //   contents: [{ role: 'user', parts }],
  //   generationConfig,
  //   safetySettings,
  // });
  // const response = result.response;
  // return response.text();

  const chat = await model.startChat();
  const result = await chat.sendMessageStream(parts);
  return result;
}
