import React, { useContext } from 'react'
import noteContext from "../context/notes/NoteContext"
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-4">
            <div className="card my-1">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title text-danger">{note.title}</h5>
                        <div className="icons ">
                            <IconButton onClick={() => { deleteNote(note._id); props.showAlert("Deleted successfully", "success") }}><DeleteOutlineOutlinedIcon color="secondary" /></IconButton>
                            <IconButton onClick={() => { updateNote(note) }}><EditIcon color="secondary" /></IconButton>
                        </div>
                    </div>
                    <div className="my-2 d-flex justify-content-between ">
                        <p className="card-text w-75">{note.description}</p>
                        <span className="badge bg-info col-auto h-25">{note.tag}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Noteitem