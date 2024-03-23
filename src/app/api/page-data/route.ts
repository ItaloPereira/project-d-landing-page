import type { NextRequest } from 'next/server'
import { sql } from '@vercel/postgres';

export interface PageData {
  theme: string;
  primary_color: string;
}

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const host = requestHeaders.get('host');
  let response;

  if (!host) {
    throw new Error('Failed to get host from request headers');
  }

  const subdomain = host.split('.')[0];

  // const userData = await sql`
  //   SELECT * FROM users WHERE username = ${subdomain}
  // `;

  const { rows: [pageData] } = await sql<PageData>`
    SELECT p.*
    FROM pages p
    JOIN users u ON p.user_id = u.id
    WHERE u.username = ${subdomain}
  `;

  // const { rows: [page] } = await sql(`
  //   SELECT * FROM pages WHERE user_id = $1;
  // `, [userId]);

  // try {
  //   const data = await sql<LatestInvoiceRaw>`
  //     SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
  //     FROM invoices
  //     JOIN customers ON invoices.customer_id = customers.id
  //     ORDER BY invoices.date DESC
  //     LIMIT 5`;

  //   const latestInvoices = data.rows.map((invoice) => ({
  //     ...invoice,
  //     amount: formatCurrency(invoice.amount),
  //   }));
  //   return latestInvoices;
  // } catch (error) {
  //   console.error('Database Error:', error);
  //   throw new Error('Failed to fetch the latest invoices.');
  // }


  return Response.json(pageData);
}
