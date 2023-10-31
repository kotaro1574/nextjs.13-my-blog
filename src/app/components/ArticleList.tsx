import { Article } from '@/types'
import ArticleCard from './ArticleCard'

type Props = {
  articles: Article[]
}

const ArticleList = ({ articles }: Props) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList
