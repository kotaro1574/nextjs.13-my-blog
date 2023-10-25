import { notFound } from 'next/navigation'
import { Article } from './types'

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(
    `http://0.0.0.0:3001/posts`,
    { cache: 'no-store' }, // SSR
  )

  if (!res.ok) {
    throw new Error('エラー')
  }

  const articles = await res.json()
  return articles
}

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(
    `http://0.0.0.0:3001/posts/${id}`,
    { next: { revalidate: 60 } }, // ISR
  )

  if (res.status === 404) {
    notFound()
  }

  if (!res.ok) {
    throw new Error('エラー')
  }

  const article = await res.json()
  return article
}
