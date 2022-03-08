// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { STRAPI_API, STRAPI_UPLOADS } from "../../config"


export default async function handler(req, res) {
  const response = await fetch(`${STRAPI_API}/units?populate=*`);

  return res.status(200).json({response})
}