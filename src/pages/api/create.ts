import { supabase } from '@/utils/supabaseClinet'
import { NextApiRequest, NextApiResponse } from 'next'
import { notFound } from 'next/navigation'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, title, content } = req.body

  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createdAt: new Date().toISOString() }])

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  if (!data) {
    return notFound
  }

  return res.status(200).json(data)
}
