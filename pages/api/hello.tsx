// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
const hello: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  return res.json({ data: "foobar" });
};

export default hello;
