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
  console.log("POST function called");
  
  //Create a table if none exists
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS quikest (
      workspace_id VARCHAR(255) NOT NULL,
      user_id VARCHAR(255) NOT NULL,
      user_email_address VARCHAR(255) NOT NULL,
      onboarding_step_one VARCHAR(255)
    );
  `;

  console.log("Table created if there wasn't one already");

  // Receive array of what do you do inputs
  const { workspace_id, user_id, user_email_address, selections } = await request.json();

  // Return a response that the selections have been stored
  return new Response('Selections stored', { status: 200 });

}