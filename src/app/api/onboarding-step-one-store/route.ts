import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function storeSelections(selections: any) {
  const client = await pool.connect();
  try {
    await client.query('INSERT INTO selections VALUES ($1)', [selections]);
  } finally {
    client.release();
  }
}

export async function GET(request: NextRequest) {
  
  const selections = request.body;
  await storeSelections(selections);

  return NextResponse.json(
    {
      body: request.body,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}