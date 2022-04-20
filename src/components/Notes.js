import React, { useContext, useEffect, useRef, useState, useHistory } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const Notes = (props) => {
    const context = useContext(noteContext);
    let history = useHistory;
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
        getNotes()
        }
        else{
          history.push("/login")  
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Updated successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div className="container flex-column h-100" >
            <AddNote showAlert={props.showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <DialogContent style={{ paddingTop: "0.5rem" }}>
                        <DialogContentText style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1rem", marginBottom: "0.5rem" }}>
                            Edit the field that you want to update in the note.
                        </DialogContentText>
                                <div className="mb-3">
                                    <label inputProps={{minlength:3}} autoFocus required color="secondary" margin="dense" htmlFor="title" className="form-label text-muted">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" placeholder='Enter the title here' value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label inputProps={{minlength:3}} autoFocus required color="secondary" margin="dense" htmlFor="description" className="form-label text-muted">Description</label>
                                    <textarea rows={1} type="text" className="form-control" placeholder='Enter the text here' id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label inputProps={{minlength:3}} autoFocus required color="secondary" margin="dense" htmlFor="tag" className="form-label text-muted">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" placeholder='e.g. personal' value={note.etag} onChange={onChange} />
                                </div>
                                </DialogContent>
                        <div className="modal-footer">
                        <DialogActions>
                        {/* <Button variant="outlined" color="secondary" onClick={handleClose} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Cancel</Button>
                        <Button disabled={title.length < 3 || description.length < 3 || tag.length < 3 } variant="contained" color="secondary" type="submit" onClick={handleClose} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Edit {note.title}</Button>
                     */}
                            <button ref={refClose} type="button" className="btn btn-secondary sm" data-bs-dismiss="modal" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Cancel</button>
                            <button disabled={note.etitle.length<3 || note.edescription.length<3} onClick={handleClick} type="button" className="btn btn-primary sm" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Update {note.etitle}</button>
                            </DialogActions>
                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2 mb-4 mx-3 d-flex flex-wrap ">
                <h2>Your Notes</h2>
                <div className="container mx-2 "> 
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes