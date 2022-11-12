import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Pageinfo } from "../../typings";

const query = groq`
*[_type == "pageInfo"][0]
`;

type Data = {
  Pageinfo: Pageinfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Pageinfo: Pageinfo = await sanityClient.fetch(query);
  res.status(200).json({ Pageinfo });
}
