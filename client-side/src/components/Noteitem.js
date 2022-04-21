import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
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
                    <IconButton  onClick={() => { deleteNote(note._id); props.showAlert("Deleted successfully", "success") }}><DeleteOutlineOutlinedIcon color="secondary" /></IconButton>
                    <IconButton  onClick={() => { updateNote(note) }}><EditIcon color="secondary" /></IconButton>
                        </div>
                    </div>
                    <div className="my-2 d-flex justify-content-between ">
                        <p className="card-text w-75">{note.description}</p>
                        <span className="badge bg-info col-auto h-25">{note.tag}</span>
                    </div>
                    {/* <div className="card-footer  text-right mb-0" style={{width:"100%"}}>
      <small className="text-muted">{note.date}</small>
    </div> */}
                </div>
            </div>
        </div>
        
    //     <div className="card">
    //             <div className="card-body">
    //                 <div className="d-flex align-items-center">
    //                     <h5 className="card-title">{note.title}</h5>
    //                     <IconButton onClick={() => { remove(note._id) }} className="mb-2 ms-auto" color="secondary">
    //                         <DeleteOutlineOutlinedIcon color="secondary" />
    //                     </IconButton>
    //                     <IconButton className="mb-2" color="secondary" onClick={handleClickOpen}>
    //                         <EditIcon color="secondary" />
    //                     </IconButton>
    //                 </div>
    //                 <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
    //                 <p className="card-text">{note.description.slice(0, 200)} ...</p>
    //             </div>
    //         </div>
     )
}


export default Noteitem