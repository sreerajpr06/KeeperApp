import React from "react";

import Header from "./Header";
import Note from "./Note";

import notes from "../notes";

function App()
{
    return (
        <div>
            <Header />
            <div className="note-container">
                {notes.map(note => {
                    return (
                        <Note 
                            key={note.key}
                            title={note.title}
                            content={note.content}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default App;