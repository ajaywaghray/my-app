import OpenAI from 'openai';

import { OpenAIStream, StreamingTextResponse } from 'ai';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { sql } from '@vercel/postgres';

import { NextApiResponse, NextApiRequest } from 'next';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST (request: Request) {

    console.log("openaiCompletion function called");

    // Receive the user ID and the company name
    const { messages } = await request.json();

    console.log("Sending the following messages to OpenAI: " + messages.role + " " + messages.content);

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
        model: 'gpt-4-0125-preview',
        max_tokens: 1000,
        stream: true,
        messages,
    });

    console.log("OpenAI response: " + response);

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);

}