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

export async function GET (request: Request) {
  console.log("GET function called");

  // Receive array of what do you do inputs
  const { user_id } = await request.json();

    // Fetch company name and URL from the database
    let companyName, companyUrl;
    try {
      const result = await sql`
        SELECT onboarding_company_name, onboarding_company_url 
        FROM quikest 
        WHERE user_id = ${user_id};
      `;
      companyName = result.rows[0].onboarding_company_name;
      companyUrl = result.rows[0].onboarding_company_url;
    } catch (error) {
      console.log("Error fetching company data: " + error);
      return new Response('Error fetching company data', { status: 500 });
    }
  
    // Return company name and URL
    return new Response(JSON.stringify({ companyName, companyUrl }), { status: 200 });
}

export async function POST (request: Request) {
  console.log("POST function called");

  // Receive array of what do you do inputs
  const { user_id } = await request.json();

  // Return a response that the selections have been stored
  return new Response('Selections stored', { status: 200 });

}