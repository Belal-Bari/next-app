import React from 'react'
import NoteCard from '../components/NoteCard';
import Pocketbase from 'pocketbase';

async function getNotes() {
    //This is the manual way
    // const res = await fetch('http://127.0.0.1:8095/api/collections/notes/records?page=1&perPage=30',
    //     { cache: 'no-store'}
    // );
    // const data = await res.json();
    //pocketbase has its own ORM style db calling:
    const db = new Pocketbase('http://127.0.0.1:8095');
    const data = await db.collection('notes').getFullList();
    return data as any[];
}

async function NotesPage() {
    const notes = await getNotes()

    return (
        <div>
            <h1>NotesPage</h1>
            <div>
                {notes?.map((note) => {
                    return <NoteCard key={note.id} note={note} />
                })}
            </div>
        </div>
    )
}

export default NotesPage