import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
    }

    render() {
        return (
            <div className="note-app__container">
                <h1 className="note-app__title">Aplikasi Catatan</h1>
                <div className="note-app__content">
                    <h2 className="note-app__subtitle">Tambah Catatan</h2>
                    <h2 className="note-app__subtitle">Daftar Catatan</h2>
                    <NoteList notes={this.state.notes} />
                </div>
            </div>
        );
    }
}

export default NoteApp;
