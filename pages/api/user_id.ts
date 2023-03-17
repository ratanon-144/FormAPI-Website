import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    user_id: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ user_id:["student","instructor"] })
}