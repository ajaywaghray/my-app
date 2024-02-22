import OpenAI from 'openai';

import { OpenAIStream, StreamingTextResponse } from 'ai';

// Set the runtime to edge for best performance
export const runtime = 'edge';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST (req: Request) {

    console.log("openaiCompletion function called");

    // Receive the user ID and the company name
    const { prompt } = await req.json();

    console.log("openaiCompletion function called with message: ", prompt );

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
        model: 'gpt-4-0125-preview',
        max_tokens: 500,
        stream: true,
        messages: [
            {
                role: 'user',
                content: `Here is the message: ${prompt}`,
            },
        ],
    });

    console.log("OpenAI response: ", response );

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    console.log("I got past the stream command!");

    // Respond with the stream
    return new StreamingTextResponse(stream);

}