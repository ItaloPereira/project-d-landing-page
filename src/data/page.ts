import { headers } from "next/headers";

export const getPageData = async () => {
  const host = headers().get("host");
  const protocol = headers().get("x-forwarded-proto");

  const res = await fetch(`${protocol}://${host}/api/page-data`);
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
