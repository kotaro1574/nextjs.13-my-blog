import { Article } from './types'

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(
    `https://silver-waddle-pwx9pxgwgvg296j4-3001.app.github.dev/posts`,
    { cache: 'no-store' }, // SSR
  )

  const articles = res.json()
  return articles
}
