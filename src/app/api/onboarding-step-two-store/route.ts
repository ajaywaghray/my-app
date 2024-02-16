import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { NextApiResponse, NextApiRequest } from 'next';

async function storeSelectionsStepTwo(user_id: any, onboarding_company_name: any, onboarding_company_url: any, onboarding_company_size: any) {
  
  console.log("storeSelectionsStepTwo function called");

  // Store selections from onboarding in database
  try {
    console.log("Starting SQL query to store selections in database");
    await sql`INSERT INTO quikest (onboarding_company_name, onboarding_company_url,onboarding_company_size) VALUES (${onboarding_company_name}, ${onboarding_company_url}, ${onboarding_company_size});`;
  } catch (error) {
    console.log("Selections not stored in database due to error: " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
  
  console.log("SelectionsStepTwo stored in database");

}

export async function POST (request: Request) {
  console.log("POST function called");
  
  //Create a table if none exists
  const createColumns = await sql`
  IF NOT EXISTS (
    SELECT * FROM sys.columns 
    WHERE Name1 = N'onboarding_company_name' 
    AND Name2 = N'onboarding_company_url' 
    AND Name3 = N'onboarding_company_size' 
  )
  BEGIN
      ALTER TABLE quikest ADD onboarding_company_name VARCHAR(255) NOT NULL onboarding_company_url VARCHAR(255) NOT NULL onboarding_company_size VARCHAR(255) NOT NULL;
  END
  `;

  console.log("Columns created if there wasn't columns already");

  // Receive array of what do you do inputs
  const { user_id, onboarding_company_name, onboarding_company_url, onboarding_company_size } = await request.json();

  // Store the selections in the database against the new user ID and create a new workspace ID to store in the database
  await storeSelectionsStepTwo(user_id, onboarding_company_name, onboarding_company_url, onboarding_company_size);

  // Return a response that the selections have been stored
  return new Response('SelectionsStepTwo stored', { status: 200 });

}

export async function GET(request: Request) {
  
}