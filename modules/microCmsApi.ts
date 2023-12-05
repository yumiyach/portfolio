export default async function <T>(endpoint: string, limit: number): Promise<T[]> {
  console.log(process.env)
  const res = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}/api/v1/${endpoint}?limit=${limit}`,
    {
      mode: "cors",
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
        "Content-Type": "application/json",
      },
    }
  )
  const contents = (await res.json()).contents as T[]
  return contents
};
