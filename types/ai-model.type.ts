export interface Model {
  id: string;
  name: string;
}

export const MODELS: Model[] = [
  { id: "auto", name: "Auto" },
  { id: "deepseek-r1t2", name: "DeepSeek-R1T2" },
  { id: "devstral-2512", name: "Devstral-2512" },
  { id: "gemini-flash-2.0", name: "Gemini-flash-2.0" },
  { id: "gpt-oss-20b", name: "GPT-OSS-20b" },
];