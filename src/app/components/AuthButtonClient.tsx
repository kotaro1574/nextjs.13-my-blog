'use client'

import {
  Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const AuthButtonClient = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo:
          'https://silver-waddle-pwx9pxgwgvg296j4-3000.app.github.dev/auth/callback',
      },
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return session ? (
    <button
      onClick={handleSignIn}
      className="bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-5"
    >
      Login
    </button>
  ) : (
    <button
      onClick={handleSignOut}
      className="bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-5"
    >
      Logout
    </button>
  )
}

export default AuthButtonClient
