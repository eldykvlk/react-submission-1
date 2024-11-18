import React from "react";

function DeleteButton({ id, onDelete }) {
    return (
        <button
            className="btn-floating btn-small red"
            style={{ position: "absolute", top: "-10px", right: "-10px" }}
            onClick={() => onDelete(id)}
        >
            <i className="material-icons">delete</i>
        </button>
    );
}

export default DeleteButton;
