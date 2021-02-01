import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function CreateArea(props){
    let [newItem, setNewItem] = useState({
        title: "",
        content: ""
    });

    function handleInputChange(event) {
        let {value, name} = event.target;

        if(name === "title") {
            setNewItem( (prevItem) => {
                return (
                    {
                        id: uuidv4(),
                        title: value,
                        content: prevItem.content
                    }
                )
            })
        }
        else if(name === "content") {
            setNewItem( (prevItem) => {
                return (
                    {
                        id: uuidv4(),
                        title: prevItem.title,
                        content: value
                    }
                )
            })
        }
    }

    return (
        <div className="add-content-container">
            <form>
                <div className="add-content">
                    <input onChange={handleInputChange} name="title" placeholder="Title" value={newItem.title} />
                    <textarea onChange={handleInputChange} name="content" placeholder="Content" rows="3" value={newItem.content} />
                    <button onClick={ (event) => {
                        props.onAdd(newItem);
                        newItem.title = "";
                        newItem.content = "";
                        event.preventDefault();
                    }}>+</button>
                </div>    
                
            </form>
        </div>
    )
}

export default CreateArea;