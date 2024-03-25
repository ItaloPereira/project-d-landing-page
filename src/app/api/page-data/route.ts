import type { NextRequest } from 'next/server'
import { sql } from '@vercel/postgres';


export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const host = requestHeaders.get('host');

  if (!host) {
    throw new Error('Failed to get host from request headers');
  }

  const subdomain = host.split('.')[0];

  const userQuery = await sql`
    SELECT id FROM users WHERE username = ${subdomain};
  `;

  const userId = userQuery.rows[0].id;

  // const { rows: [pageData] } = await sql`
  //   SELECT p.*
  //   FROM pages p
  //   JOIN users u ON p.user_id = u.id
  //   WHERE u.username = ${subdomain}
  // `;

  const { rows: [pageSettings] } = await sql`
    SELECT ps.* FROM page_settings ps
    INNER JOIN pages p ON ps.page_id = p.id
    WHERE p.user_id = ${userId};
  `;

  return Response.json(pageSettings);
}
