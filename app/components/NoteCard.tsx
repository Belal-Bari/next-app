import Link from 'next/link'
import React from 'react'

function NoteCard({ note }: any) {
  const { id, title, content, created } = note || {}

  return (
    <Link href={`/notes/${id}`} style={{'display': 'grid', 'width':'30%','textDecoration': 'none'}}>
      <div style={{'border': '1px solid black','background': 'yellow','paddingLeft': '10px'}}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
        <p>{id}</p>
      </div>
    </Link>
  )
}

export default NoteCard