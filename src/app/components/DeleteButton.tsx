'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  id: string
}

const DeleteButton = ({ id }: Props) => {
  const router = useRouter()

  const handleDelete = async () => {
    const res = await fetch(
      `https://silver-waddle-pwx9pxgwgvg296j4-3000.app.github.dev/api/${id}`,
      {
        method: 'DELETE',
      },
    )

    console.log(res)

    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5"
    >
      削除
    </button>
  )
}

export default DeleteButton
