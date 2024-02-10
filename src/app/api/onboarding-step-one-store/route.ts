import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { NextApiResponse, NextApiRequest } from 'next';

async function storeSelections(selections: any) {
  
  console.log("storeSelections function called");

}

export async function POST (request: Request) {
  console.log("POST function called");

  //Create a table if none exists
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS quikest (
      workspace_id SERIAL PRIMARY KEY,
      user_id INT,
      onboarding_step_one STRING
    );
  `;

  console.log("Table possibly created");

  // Receive array of what do you do inputs
  const { selections } = await request.json();

  // Store the selections in the database against the new user ID and create a new workspace ID to store in the database
  await storeSelections(selections);

  // Return a response that the selections have been stored
  return new Response('Selections stored', { status: 200 });

}

export async function GET(request: Request) {
  
}