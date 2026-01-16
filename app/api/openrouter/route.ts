// app/api/openrouter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { callOpenRouterAPI, DAAI_SYSTEM_PROMPT } from '@/lib/openrouter';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Add system prompt to messages
    const messagesWithSystem = [
      { role: 'system', content: DAAI_SYSTEM_PROMPT },
      ...messages
    ];

    const response = await callOpenRouterAPI(messagesWithSystem, apiKey);
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('OpenRouter API route error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}