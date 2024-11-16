import React from "react";

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>{body}</p>
            </div>
            <div className="card-action">
                <small className="grey-text text-lighten-1">Created at: {createdAt}</small>
            </div>
        </div>
    );
}

export default NoteItemBody;
