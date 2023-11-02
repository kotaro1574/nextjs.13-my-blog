import { supabase } from '@/utils/supabaseClinet'
import { NextApiRequest, NextApiResponse } from 'next'
import { notFound } from 'next/navigation'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  if (!data) {
    return notFound
  }

  return res.status(200).json(data)
}
