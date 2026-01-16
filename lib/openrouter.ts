// lib/openrouter.ts

export interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant'; // Changed order, 'system' first
  content: string;
  reasoning_details?: any;
}

// Helper function to convert chat messages to OpenRouter format
export function convertToOpenRouterMessages(
  messages: Array<{ id: string; text: string; isUser: boolean; timestamp: Date; isTyping?: boolean; reasoning_details?: any }>
): OpenRouterMessage[] {
  return messages
    .filter(msg => !msg.isTyping) // Remove typing indicators
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

// Daai-specific system prompt
export const DAAI_SYSTEM_PROMPT = `You are Daai Assistant, an AI expert for the Daai platform...`; // Keep the same prompt