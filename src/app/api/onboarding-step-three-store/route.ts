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

export async function GET (req: NextRequest, res: NextResponse) {
  console.log("GET function called");

  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('query')

  console.log("GET function called with query: " + query);

  // Fetch company name and URL from the database
  let companyName, companyUrl;
    try {
      const result = await sql`
        SELECT onboarding_company_name, onboarding_company_url 
        FROM quikest 
        WHERE user_id = ${query};
      `;
      companyName = result.rows[0].onboarding_company_name;
      console.log("Company Name: " + companyName);
      companyUrl = result.rows[0].onboarding_company_url;
      console.log("Company URL: " + companyUrl);
    } catch (error) {
      console.log("Error fetching company data: " + error);
      return new Response('Error fetching company data', { status: 500 });
    }

    // Return company name and URL
    const responseBody = { companyName, companyUrl };
    return new Response(JSON.stringify(responseBody), { status: 200 });
}

export async function POST (request: Request) {
  console.log("POST function called");

  // Receive array of what do you do inputs
  const { user_id } = await request.json();

  // Return a response that the selections have been stored
  return new Response('Selections stored', { status: 200 });

}