import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props){
    let [isExpanded, setIsExpanded] = useState(false);

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
                    {isExpanded && <input 
                        onChange={handleInputChange} 
                        name="title" 
                        placeholder="Title" 
                        value={newItem.title} 
                    />}
                    <textarea 
                        onClick={ () => setIsExpanded(true)} 
                        onChange={handleInputChange} 
                        name="content" 
                        placeholder="Content" 
                        rows={isExpanded ? 3 : 1} 
                        value={newItem.content} 
                    />
                    
                    <Zoom in={isExpanded}>
                        <button onClick={ (event) => {
                            props.onAdd(newItem);
                            newItem.title = "";
                            newItem.content = "";
                            event.preventDefault();
                        }}>+</button>
                    </Zoom>
                </div>    
                
            </form>
        </div>
    )
}

export default CreateArea;