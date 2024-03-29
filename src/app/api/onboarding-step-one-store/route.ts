import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { NextApiResponse, NextApiRequest } from 'next';

async function storeSelections(workspace_id: any, user_id: any, user_email_address: any, selections: any) {
  
  console.log("storeSelections function called");

  // Store selections from onboarding in database
  try {
    console.log("Starting SQL query to store selections in database");
    await sql`INSERT INTO quikest (workspace_id, user_id, user_email_address, onboarding_step_one) VALUES (${workspace_id}, ${user_id}, ${user_email_address}, ${selections});`;
  } catch (error) {
    console.log("Selections not stored in database due to error: " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
  
  console.log("Selections stored in database");

}

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

  // Store the selections in the database against the new user ID and create a new workspace ID to store in the database
  await storeSelections(workspace_id, user_id, user_email_address, selections);

  // Return a response that the selections have been stored
  return new Response('Selections stored', { status: 200 });

}