import { Article } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  articles: Article[]
}

const ArticleList = ({ articles }: Props) => {
  return (
    <div>
      {articles.map((article) => (
        <article key={article.id} className={'flex flex-col shadow my-4'}>
          <Link href={`articles/${article.id}`} className={'hover:opacity-75'}>
            <Image
              src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
              alt={''}
              width={1280}
              height={300}
            />
          </Link>
          <div className={'bg-white flex flex-col justify-start p-6'}>
            <Link
              href={'#'}
              className={'text-blue-700 text-sm font-bold uppercase pb-4'}
            >
              Technology
            </Link>
            <Link
              href={`articles/${article.id}`}
              className={
                'text-3xl text-slate-900 font-bold hover:text-gray-700 pb-4'
              }
            >
              {article.title}
            </Link>
            <p className={'text-sm pb-3 text-slate-900'}>
              Published on {article.createdAt}
            </p>
            <Link
              href={`articles/${article.id}`}
              className={'text-slate-900 pb-6'}
            >
              {article.content}
            </Link>
            <Link
              href={`articles/${article.id}`}
              className={'text-pink-800 hover:text-black'}
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ArticleList
