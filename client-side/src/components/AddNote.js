import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import Navbar from './Navbar';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Added successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
        <Navbar />
        <div className="container my-2 " style={{width:"50%", height:"50%"}}>
            <div class="card shadow-lg ">
            <div class="card-body p-4" style={{

        backgroundColor: "#EEEEEE"
            
            }}>
            <h3 style={{ color: "black" }}>Create new Note</h3>
            <p className="mb-4">Leave nothing behind.</p>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder='Enter the title here' name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" rows={2} className="form-control" id="description" placeholder='Enter the text here' name="description" value={note.description} onChange={onChange} minLength={5} required />
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