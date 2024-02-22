import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { NextApiResponse, NextApiRequest } from 'next';

async function storeSelectionsStepTwo(user_id: any, onboarding_company_name: any, onboarding_company_url: any, onboarding_company_size: any) {
  
  console.log("storeSelectionsStepTwo function called");

  // Store selections from onboarding in database
  try {
    console.log("Starting SQL query to store selections in database");
    await sql`
    UPDATE quikest 
      SET onboarding_company_name = ${onboarding_company_name}, 
          onboarding_company_url = ${onboarding_company_url}, 
          onboarding_company_size = ${onboarding_company_size} 
      WHERE user_id = ${user_id};
    `;
    console.log("Onboarding step 2 selections updated in database");
  } catch (error) {
    console.log("Step 2 Selections not stored in database due to error: " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
  
  console.log("Selections Step 2 stored in database");

}

export async function POST (request: Request) {
  console.log("POST function called");
  
  //Create a table if none exists
  const createColumns = await sql`
  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name = 'quikest' 
      AND column_name = 'onboarding_company_name'
    ) THEN
      ALTER TABLE quikest 
      ADD COLUMN onboarding_company_name VARCHAR(255);
    END IF;

    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name = 'quikest' 
      AND column_name = 'onboarding_company_url'
    ) THEN
      ALTER TABLE quikest 
      ADD COLUMN onboarding_company_url VARCHAR(255);
    END IF;

    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name = 'quikest' 
      AND column_name = 'onboarding_company_size'
    ) THEN
      ALTER TABLE quikest 
      ADD COLUMN onboarding_company_size VARCHAR(255);
    END IF;
  END $$;
  `;

  console.log("Columns created if there wasn't columns already");

  // Receive array of what do you do inputs
  const { user_id, onboarding_company_name, onboarding_company_url, onboarding_company_size } = await request.json();

  // Store the selections in the database against the new user ID and create a new workspace ID to store in the database
  await storeSelectionsStepTwo(user_id, onboarding_company_name, onboarding_company_url, onboarding_company_size);

  // Return a response that the selections have been stored
  return new Response('Selections Step 2 stored', { status: 200 });

}