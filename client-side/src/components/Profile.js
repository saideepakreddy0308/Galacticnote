import React, { useEffect, useState, useRef ,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import NoteContext from '../context/notes/NoteContext'
import Alert from './Alert';

const Profile = () => {
    let [username, setUsername] = useState("Loading...");
    let [email, setEmail] = useState("Loading...");
    const [alert, setAlert] = useState(null);
    const host = "http://localhost:5000"
    const refDelete = useRef(null);
    const context = useContext(NoteContext)
    const { deleteallnote } = context
    const history = useHistory();
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    const getUserData = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setUsername(json.name)
        setEmail(json.email)
    }
    const deleteClick = () => {
        refDelete.current.click()
    }
    const handleDelete = async () => {
        refDelete.current.click()
        const response = await fetch(`${host}/api/auth/deleteuser`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        
        const json = await response.json();
        if(json.status===500){console.log(json)}
        // deleteallnote();
        // console.log(json);
        localStorage.removeItem('token');
        showAlert('Account Deleted successfully', 'success')
        history.push('/login')
    }
    useEffect(() => {
        getUserData()
    })
    return (
        <>
            <Navbar />
            {/* <Alert alert={alert} /> */}
            <div className="bg-light" style={{ backgroundColor: "#85F4FF" }} >
                <button ref={refDelete} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="exampleModalLabel">Do you really want to delete your account ? </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <p className='p-3'><span><strong>ATTENTION!</strong></span> If you decide to delete this account, your account and personal data will be deleted permanently and irreversible. Please make sure you do not have valuable information in there.</p>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleDelete} type="button" className="btn btn-danger ">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='justify-content-sm-center mx-auto mt-5 p-5 col-sm-9 card shadow-lg col-md-7 col-md-offset-4 ' style={{ backgroundColor: "#EEEEEE" }}  >
            <h5 className="fs-1 mb-2"><span><img className="img-circle img-responsive" src="https://img.icons8.com/cotton/64/000000/cloud-user.png" /></span>Profile</h5>
                <form className='border-top border-secondary pt-1 pt-3'>
                    
                    <div className="form-group row mb-2">
                        <label for="name" className="col-sm-2 col-form-label " style={{ fontWeight: "bold" }}>Username</label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext px-2 border border-dark rounded" style={{ fontWeight: 500 }} id="name" value={username} />
                        </div>
                    </div>
                    <div className="form-group row mb-4 ">
                        <label for="staticEmail" className="col-sm-2 col-form-label " style={{ fontWeight: "bold" }}>Email</label>
                        <div className="col-sm-10">
                            <input type="email" readonly className="form-control-plaintext px-2 border border-dark rounded" style={{ fontWeight: 500 }} id="staticEmail" value={email} />
                        </div>
                    </div>
               
                <div className="my-2 ">
                    <h2 className="" style={{ color: "#34495e" }}>Delete Account</h2>
                    <p>Please be certain, once you delete your account there's no way to recover this.</p>
                    <button onClick={deleteClick} type="button" className="btn mb-2 btn-outline-light " style={{ backgroundColor: "#34495e" }} autoFocus>Delete Account </button>
                </div>
                </form>
            </div>
        </>)
}
export default Profile