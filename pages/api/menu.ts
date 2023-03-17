import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    menu:string[],
    icon:string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ menu: ['รายวิชา', 'การทดสอบ', 'รายชื่อ', 'เพิ่มผู้สอน','คลังข้อสอบ','คะแนน','วิเคราะห์ข้อมูล'],
  icon: ['MenuBook', 'LibraryAddCheck', 'Group', 'PersonAdd','ListItemIcon','TableChart','BarChart'] })
}