import React from "react";

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div>
            <h6 className="card-title" style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "10px" }}>
                {title}
            </h6>
            <p style={{ marginBottom: "10px", fontSize: "1em", lineHeight: "1.5" }}>{body}</p>
            <p style={{ fontSize: "0.85em", color: "#757575" }}>{createdAt}</p>
        </div>
    );
}

export default NoteItemBody;
