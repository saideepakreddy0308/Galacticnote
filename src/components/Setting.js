import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import './profile.css'

const Setting = () => {
    let [username, setUsername] = useState("Loading...");
    let [email, setEmail] = useState("Loading...");
    const host = "http://localhost:5000"
    const refDelete = useRef(null);

    const history = useHistory();
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
        const response = await fetch(`${host}/api/auth/deleteuser`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = response.json()
        console.log(json);
        localStorage.clear('token')
        history.push('/login')


    }

    useEffect(() => {
        getUserData()
    })
    return (
        <>
            <Navbar />
            {/* <div className="justify-content-sm-center ">
        <div className="bg-light"> */}
            <div className="bg-light" style={{backgroundColor:"#EEEEEE"}} >
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
            <div className='justify-content-sm-center mx-auto mt-5 p-5 col-sm-9 card shadow-lg col-md-7 col-md-offset-4' style={{backgroundColor:"#EEEEEE"}}  >
                <form>
                    <h5 className="fs-1 mb-2"><span><img className="img-circle img-responsive" src="https://img.icons8.com/cotton/64/000000/cloud-user.png" /></span>Profile</h5>
                    <div className="form-group row">
                        <label for="name" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext" id="name" value={username} />
                        </div>
                    </div>
                    <div className="form-group row ">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" readonly className="form-control-plaintext" id="staticEmail" value={email} />
                        </div>
                    </div>
                </form>
                <div className="my-3">
                    <h2 className="" style={{color:"#34495e"}}>Delete Account</h2>
                    <small>Once you delete your account, there's no way to recover this.Please be certain</small><br />
                    <button onClick={deleteClick} type="button" className="btn my-2 btn-outline-info" style={{color:"#34495e"}}>Delete Account</button>
                </div>
            </div>
            {/* <div>
                <h3 className="fs-1">Profile</h3>
                <div className="container my-3">
                    <p className="h6 my-2">Name: </p> <li className="list-group-item">{username}</li>
                    <p className="h6 my-2">Email: </p> <li className="list-group-item">{email}</li>
                </div>

                <div className="my-3">
                    <h2 className="text-warning">Delete Account</h2>
                    <small>Once you delete you account, there is no going back. Please be certain.</small><br />
                    <button onClick={deleteClick} type="button" className="btn my-2 btn-outline-warning">Delete Account</button>
                </div>
            </div> */}
            {/* </div>
        </div> */}
        </>)
}

export default Setting