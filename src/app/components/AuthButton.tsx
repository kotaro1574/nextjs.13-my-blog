'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const AuthButton = () => {
  const supabase = createClientComponentClient()

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
  }

  return (
    <div className="flex gap-4">
      <button
        onClick={handleSignIn}
        className="bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-5"
      >
        Login
      </button>
      <button
        onClick={handleSignOut}
        className="bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-5"
      >
        Logout
      </button>
    </div>
  )
}

export default AuthButton
