import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
    return (
        <div className="card" style={{ position: "relative", maxWidth: "100%" }}>
            <DeleteButton id={id} onDelete={onDelete} />
            <div className="card-content">
                <NoteItemBody title={title} body={body} createdAt={createdAt} />
            </div>
            <div className="card-action" style={{ textAlign: "right" }}>
                <button
                    className="btn-small"
                    onClick={() => onArchive(id)}
                >
                    {archived ? "Kembalikan" : "Arsipkan"}
                </button>
            </div>
        </div>
    );
}

export default NoteItem;
