import Link from 'next/link'
const Header = () => {
  return (
    <header className={'py-5 px-10 border-b flex justify-between items-center'}>
      <div>
        <h1 className={'text-2xl font-extrabold'}>
          <Link href={'/'}>next.js13 blog</Link>
        </h1>
      </div>
      <div>
        <nav className={'text-sm font-medium'}>
          <Link
            className={'bg-orange-300 p-3 rounded-md'}
            href={'/articles/create'}
          >
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
