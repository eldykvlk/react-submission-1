import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
    if (notes.length === 0) {
        return <p className="center-align">Catatan kosong.</p>;
    }

    return (
        <div className="row" style={{ margin: "0" }}>
            {notes.map((note) => (
                <div key={note.id} className="col s12 m6 l4" style={{ marginBottom: "20px" }}>
                    <NoteItem
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        createdAt={note.createdAt}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        isArchived={note.isArchived}
                    />
                </div>
            ))}
        </div>
    );
}

export default NoteList;
