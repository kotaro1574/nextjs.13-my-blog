import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div>
        <h1 className={'text-2xl font-extrabold bg-red-500'}>
          <Link href={'/'}>next.js13 blog</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
