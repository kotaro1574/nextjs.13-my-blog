import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ArticleList from './components/ArticleList'
import AuthButtonServer from './components/AuthButtonServer'
import { redirect } from 'next/navigation'

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL!

  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  const res = await fetch(`${API_URL}/api/blog`, { cache: 'no-store' })
  const articles = await res.json()

  const { data: tweets } = await supabase.from('tweets').select()

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div>
          <AuthButtonServer />
        </div>
        {tweets?.map((tweet) => (
          <div
            key={tweet.id}
            className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full"
          >
            <h3 className="font-bold text-gray-900 mb-2">{tweet.title}</h3>
            {/* <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p> */}
          </div>
        ))}
      </aside>
    </div>
  )
}
