import React, { useState } from "react";

import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

// import notes from "../notes";

function App()
{
    let [notes, setNotes] = useState([]);

    function onAdd(newNote){
        
        console.log(newNote);
        setNotes( (prevNotes) => {
            return [...prevNotes, 
                {
                    title : newNote.title,
                    content: newNote.content
                }
            ];
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
                            key={note.key}
                            title={note.title}
                            content={note.content}
                        />
                    )
                }) : null }

            
{/* 
                {notes.map(note => {
                    return (
                        <Note 
                            key={note.key}
                            title={note.title}
                            content={note.content}
                        />
                    )
                })} */}
                
            </div>
        </div>
    );
}

export default App;