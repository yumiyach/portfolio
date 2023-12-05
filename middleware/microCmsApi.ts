export default async function <T>(endpoint: string, limit: number): Promise<T[]> {
  const res = await fetch(
    `https://yumiya-portfolio.microcms.io/api/v1/${endpoint}?limit=${limit}`,
    {
      mode: "cors",
      headers: {
        "X-MICROCMS-API-KEY":'E5bILxMzoZWjd6dbK1CpON18l5156F3bkmcg',
        "Content-Type": "application/json",
      },
    }
  )
  const contents = (await res.json()).contents as T[]
  return contents
};
