import React from 'react'

export default function FeedbackButton({ title }: {title: string}) {
  return (
    <div>
      <button className={"outline outline-1 rounded-sm capitalize px-2 py-1 mr-2 text-sm hover:text-black hover:outline-black"}>{title}</button>
    </div>
  )
}
