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
  const client = await pool.connect();
  try {
    await client.query('INSERT INTO selections VALUES ($1)', [selections]);
  } finally {
    client.release();
  }
}