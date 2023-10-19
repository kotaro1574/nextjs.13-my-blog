import Image from 'next/image'
import Link from 'next/link'

const ArticleList = () => {
  return (
    <div>
      <article className={'flex flex-col shadow my-4'}>
        <Link href={'#'} className={'hover:opacity-75'}>
          <Image
            src={
              'https://source.unsplash.com/collection/1346951/1000x500?sig=1'
            }
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
            href={'#'}
            className={
              'text-3xl text-slate-900 font-bold hover:text-gray-700 pb-4'
            }
          >
            Next.jsの勉強中
          </Link>
          <p className={'text-sm pb-3 text-slate-900'}>
            Published on 2023/10/18
          </p>
          <Link href={'#'} className={'text-slate-900 pb-6'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </Link>
          <Link href={'#'} className={'text-pink-800 hover:text-black'}>
            続きを読む
          </Link>
        </div>
      </article>
      <article className={'flex flex-col shadow my-4'}>
        <Link href={'#'} className={'hover:opacity-75'}>
          <Image
            src={
              'https://source.unsplash.com/collection/1346951/1000x500?sig=2'
            }
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
            href={'#'}
            className={
              'text-3xl text-slate-900 font-bold hover:text-gray-700 pb-4'
            }
          >
            Next.jsの勉強中
          </Link>
          <p className={'text-sm pb-3 text-slate-900'}>
            Published on 2023/10/18
          </p>
          <Link href={'#'} className={'text-slate-900 pb-6'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </Link>
          <Link href={'#'} className={'text-pink-800 hover:text-black'}>
            続きを読む
          </Link>
        </div>
      </article>
      <article className={'flex flex-col shadow my-4'}>
        <Link href={'#'} className={'hover:opacity-75'}>
          <Image
            src={
              'https://source.unsplash.com/collection/1346951/1000x500?sig=3'
            }
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
            href={'#'}
            className={
              'text-3xl text-slate-900 font-bold hover:text-gray-700 pb-4'
            }
          >
            Next.jsの勉強中
          </Link>
          <p className={'text-sm pb-3 text-slate-900'}>
            Published on 2023/10/18
          </p>
          <Link href={'#'} className={'text-slate-900 pb-6'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </Link>
          <Link href={'#'} className={'text-pink-800 hover:text-black'}>
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList
