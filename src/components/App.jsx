import React, { useState } from "react";

import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

// import notes from "../notes";

function App()
{
    let [notes, setNotes] = useState([]);

    function onAdd(newNote){
        
        // console.log(newNote);
        setNotes( (prevNotes) => {
            return [...prevNotes, 
                {
                    id: newNote.id,
                    title : newNote.title,
                    content: newNote.content
                }
            ];
        })
        
    }

    function onDelete(id) {
        // console.log(id);
        setNotes( (prevNotes) => {
            return (
                prevNotes.filter( (note) => {
                    return note.id !== id;
                })
            );
        })
    }

    return (
        <div>
            <Header /> 
            <CreateArea onAdd={onAdd}/>
            <div className="note-container">
                
                {notes.length !== 0 ? notes.map(note => {
                    return (
                        <Note 
                            id={note.id}
                            key={note.id}
                            title={note.title}
                            content={note.content}
                            onDelete={onDelete}
                        />
                    )
                }) : null }
                
            </div>
        </div>
    );
}

export default App;