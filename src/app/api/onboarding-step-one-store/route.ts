import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { NextApiResponse, NextApiRequest } from 'next';

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function storeSelections(selections: any) {
  console.log("storeSelections function called");
  
  const client = await pool.connect();
  try {
    await client.query('INSERT INTO selections VALUES ($1)', [selections]);
  } finally {
    client.release();
  }
}

export async function POST (request: Request) {
  console.log("POST function called");

  // Receive array of what do you do inputs
  const { selections } = await request.json();

  // Store the selections in the database against the new user ID and create a new workspace ID to store in the database
  await storeSelections(selections);

  // Return a response that the selections have been stored
  return new Response('Selections stored', { status: 200 });

}