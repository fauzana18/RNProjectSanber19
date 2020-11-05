import React, { useState } from 'react'
import TodoList from './TodoList';
import { RootContext } from './context'

const index = () => {
    const [note, setNote] = useState([])
    const [noteText, setNoteText] = useState('')

    handleChangeInput = (value) => {
        setNoteText (value)
    }

    addNote = () => {
        if(noteText){
            var d = new Date();
            const day = d.getDate()
            const month = d.getMonth()+1
            const year = d.getFullYear()
            const hour = d.getHours()
            const minute = d.getMinutes()
            const second = d.getSeconds()
            const millisecond = d.getMilliseconds()
            const today = `${day}/${month}/${year}`
            const key = `${day}/${month}/${year} ${hour}:${minute}:${second}.${millisecond}`
            setNote([...note, {key: key, title: noteText, date: today}])
            setNoteText('')
        }
    }

    deleteNote = (key) => {
        for(let i=0; i < note.length; i++){
            if(key === note[i].key){
                note.splice(i, 1)
                setNote([...note])
            }
        }
    }

    return (
        <RootContext.Provider value={{
            note,
            noteText,
            handleChangeInput,
            addNote,
            deleteNote
        }}>
            <TodoList />
        </RootContext.Provider>
    )
}

export default index