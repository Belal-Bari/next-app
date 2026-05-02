'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const DeleteCard = ({ note }: any) => {
    
    const router = useRouter();
    
    async function deleteNote(){
        console.log(note.id)
        await fetch(`http://127.0.0.1:8095/api/collections/notes/records/${note.id}`, 
            {
                method: "DELETE"
            }
        )
        router.push('/')
    }
    
    
    return (
        <button
            onClick={deleteNote}
        >DeleteCard</button>
    )
}

export default DeleteCard