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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const selections = JSON.parse(req.body);
    await storeSelections(selections);
    res.status(200).json({ message: 'Success' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}