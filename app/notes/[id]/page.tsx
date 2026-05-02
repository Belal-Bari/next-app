
export const dynamic = 'force-dynamic'; 
export const revalidate = 10;

import NoteCard from '@/app/components/NoteCard';
import React from 'react'
import Pocketbase from 'pocketbase'
import DeleteCard from '@/app/components/DeleteCard';

async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8095/api/collections/notes/records/${noteId}`,
    {
        next: { revalidate: 10 } //updates cache behaviour on the server side [ISR=incremental static regeneration by adding the revalidate option to fetch]
    })
    const data = await res.json();
    return data
}



const NotePage = async ({ params }: { params: { id: string } }) => {
    //console.log(params);
    const { id } = await params;
    const note = await getNote(id)
    //console.log('Params = ',params.id)
    //console.log(note)
    return (
        <div>
            <h1>notes/{note.id}</h1>
            <NoteCard note={note} />
            <DeleteCard note={note}/>
        </div>
    )
}

export default NotePage;