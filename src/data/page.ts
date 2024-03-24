import { headers } from "next/headers";

export const getPageData = async () => {
  const host = headers().get("host");
  const protocol = headers().get("x-forwarded-proto");

  const res = await fetch(`${protocol}://${host}/api/page-data`);
  console.log('host => ', host);
  console.log('protocol => ', protocol);
  console.log('headers() => ', headers());

  if (!res.ok) {
    // console.log('RES KKKKKK => ', res.json());
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
