import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ title, body, createdAt }) {
    return (
        <div className="col s12 m6 l4">
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
        </div>
    );
}

export default NoteItem;
