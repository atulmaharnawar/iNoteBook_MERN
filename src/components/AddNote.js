import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added note successfully!", "success");
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-3">
            <h1>Add a note</h1>
            <form className='my-3'>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required value={note.title} placeholder="min 5 characters" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea type="text" class="form-control" id="description" name="description" placeholder="Write a brief note here min 5 characters" style={{ height: '200px' }} onChange={onChange} minLength={5} required value={note.description} />
                </div>
                <div class="mb-3">
                    <label for="tag" class="form-label">Tag</label>
                    <input type="text" class="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" class="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
