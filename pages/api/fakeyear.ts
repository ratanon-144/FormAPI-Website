import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    currencies:{
        value:string[];
        label:string[];
    }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ currencies:{
    value: ["เทอม 1","เทอม 2","เทอม 3"],
  label: ["2565","2566","2567"],} })
}