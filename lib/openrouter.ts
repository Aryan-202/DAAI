export interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  reasoning_details?: any;
}

export function convertToOpenRouterMessages(
  messages: Array<{ id: string; text: string; isUser: boolean; timestamp: Date; isTyping?: boolean; reasoning_details?: any }>
): OpenRouterMessage[] {
  return messages
    .filter(msg => !msg.isTyping)
    .map(msg => {
      const role: 'user' | 'assistant' = msg.isUser ? 'user' : 'assistant';
      const message: OpenRouterMessage = {
        role,
        content: msg.text,
      };
      
      // Preserve reasoning details if they exist
      if (msg.reasoning_details) {
        message.reasoning_details = msg.reasoning_details;
      }
      
      return message;
    });
}

export async function callOpenRouterAPI(
  messages: OpenRouterMessage[],
  apiKey: string
) {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "model": "xiaomi/mimo-v2-flash:free",
        "messages": messages,
        "reasoning": { "enabled": true }
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.statusText}`);
    }

    const result = await response.json();
    return result.choices[0].message;
  } catch (error) {
    console.error('OpenRouter API call failed:', error);
    throw error;
  }
}


export const DAAI_SYSTEM_PROMPT = `You are Daai Assistant, an AI expert for the Daai platform. Daai is an intelligent spreadsheet tool that helps users clean, analyze, and visualize their data using AI automation. It's designed to simplify data work by automatically handling formulas, generating insights, and creating visualizations.

IMPORTANT INSTRUCTION: Always provide answers in plain text paragraphs. DO NOT use markdown formatting, bullet points, code blocks, or any special formatting. Keep responses concise - aim for 1-2 lines maximum. Speak conversationally and naturally as a helpful assistant.

Your role is to help users with their spreadsheet and data analysis questions. You can assist with data cleaning, formula generation, visualization suggestions, CSV analysis, and explaining data concepts in simple terms.

Remember: No markdown, just clean plain text responses.`;