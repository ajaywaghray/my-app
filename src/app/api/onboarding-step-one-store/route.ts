import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { NextApiResponse, NextApiRequest } from 'next';

async function storeSelections(selections: any) {
  
  console.log("storeSelections function called");

  // Store selections from onboarding in database
  try {
    await sql`INSERT INTO quikest (Name, Owner) VALUES (${workspace_id}, ${user_id}, ${selections});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  console.log("Selections stored in database");

}

export async function POST (request: Request) {
  console.log("POST function called");

  //Create a table if none exists
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS quikest (
      workspace_id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      onboarding_step_one VARCHAR(255)
    );
  `;

  console.log("Table created if there wasn't one already");

  // Receive array of what do you do inputs
  const { selections } = await request.json();

  // Store the selections in the database against the new user ID and create a new workspace ID to store in the database
  await storeSelections(selections);

  // Return a response that the selections have been stored
  return new Response('Selections stored', { status: 200 });

}

export async function GET(request: Request) {
  
}