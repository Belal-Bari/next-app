import Image from 'next/image'
import Link from 'next/link'
import NotesPage from './notes/page'
import CreateNote from './components/CreateNote'

export default function Home() {
  return (
    <main>
      <div>
        <NotesPage />
        <CreateNote />
      </div>
    </main>
  )
}
