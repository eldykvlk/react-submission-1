import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import SearchBar from "./SearchBar";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchKeyword: "",
        };

        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.toggleArchive = this.toggleArchive.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

   
    addNote(newNote) {
        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
        }));
    }


    deleteNote(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id),
        }));
    }

  
    toggleArchive(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            ),
        }));
    }

    
    handleSearch(event) {
        this.setState({ searchKeyword: event.target.value });
    }

    render() {
        const { notes, searchKeyword } = this.state;

     
        const filteredNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );

   
        const activeNotes = filteredNotes.filter((note) => !note.archived);
        const archivedNotes = filteredNotes.filter((note) => note.archived);

        return (
            <div className="note-app__container">
                <h1 className="note-app__title">Aplikasi Catatan</h1>
                
               
                <h2 className="note-app__subtitle">Cari Catatan</h2>
                <SearchBar searchKeyword={searchKeyword} onSearch={this.handleSearch} />

                <div className="note-app__content">
                
                    <h2 className="note-app__subtitle">Tambah Catatan</h2>
                    <NoteForm onAddNote={this.addNote} />

                    <h2 className="note-app__subtitle">Daftar Catatan</h2>
                    <NoteList
                        notes={activeNotes}
                        onDelete={this.deleteNote}
                        onArchive={this.toggleArchive}
                    />

       
                    <h2 className="note-app__subtitle">Catatan Arsip</h2>
                    <NoteList
                        notes={archivedNotes}
                        onDelete={this.deleteNote}
                        onArchive={this.toggleArchive}
                    />
                </div>
            </div>
        );
    }
}

export default NoteApp;
