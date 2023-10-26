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

export const createArticle = async (
  id: string,
  title: string,
  content: string,
): Promise<Article> => {
  const currentDatetime = new Date().toISOString

  const res = await fetch(`http://0.0.0.0:3001/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      title,
      content,
      createdAt: currentDatetime,
    }),
  })

  if (!res.ok) {
    throw new Error('エラー')
  }

  const newArticle = await res.json()
  return newArticle
}
