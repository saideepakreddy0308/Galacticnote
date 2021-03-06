import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/NoteContext"
import Navbar from './Navbar';
import { Link, useNavigate, useLocation, useHistory } from "react-router-dom";
import { TextField, Button, InputAdornment, InputLabel, OutlinedInput, FormControl, IconButton, FormHelperText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const AddNote = (props) => {
    const context = useContext(noteContext);
    let history = useHistory()
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Added successfully","success");
        history.push("/");
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
        <Navbar />
        <div className="container my-5 px-1 justify-content-center align-items-center " style={{width:"100%"}}>
            <div className="card shadow-lg ">
            <div className="card-body p-4" style={{
        backgroundColor: "#EEEEEE"
            }}>
            <Button className="mb-2" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
            <h3 style={{ color: "black" }}>Create new Note</h3>
            <p className="mb-4">Leave nothing behind.</p>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder='Enter the title here' name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" rows={1} className="form-control" id="description" placeholder='Enter the text here' name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} placeholder='e.g. personal, 03 Aug 2021' onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}
export default AddNote