import React from "react";
import NoteItem from "./NoteItem.jsx";

function NoteList({notes}){
    return(
        <div className="row">
            {
                notes.map((note)=>(
                    <NoteItem 
                    key={note.id} 
                    id={note.id}
                    {...note}/>
                    
                ))
            }
        </div>
    );
}

export default NoteList;