import { Article } from './types'

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(
    `http://0.0.0.0:3001/posts`,
    { cache: 'no-store' }, // SSR
  )

  const articles = await res.json()
  return articles
}
