import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully","success")}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                    
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