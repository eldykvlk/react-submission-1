import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            titleLimit: 50, 
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        const title = event.target.value.slice(0, this.state.titleLimit);
        this.setState({ title });
    }

    handleBodyChange(event) {
        this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const newNote = {
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            createdAt: new Date().toLocaleString(),
        };

        this.props.onAddNote(newNote);

        this.setState({ title: "", body: "" });
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.handleSubmit}>
                {/* Input Judul */}
                <div className="input-field">
                    <input
                        id="note-title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        placeholder="Masukkan judul catatan"
                        required
                    />
                    <label htmlFor="note-title">
                        Isi Judul ({this.state.titleLimit - this.state.title.length} karakter tersisa)
                    </label>
                </div>

                {/* Textarea Isi Catatan */}
                <div className="input-field">
                    <textarea
                        id="note-body"
                        className="materialize-textarea"
                        value={this.state.body}
                        onChange={this.handleBodyChange}
                        placeholder="Masukkan isi catatan"
                        required
                    ></textarea>
                    <label htmlFor="note-body">Isi Catatan</label>
                </div>

                {/* Tombol Submit */}
                <div className="input-field">
                    <button
                        type="submit"
                        className="btn waves-effect waves-light"
                    >
                        Tambah Catatan
                    </button>
                </div>
            </form>
        );
    }
}

export default NoteForm;
