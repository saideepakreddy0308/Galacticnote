import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button, InputAdornment, InputLabel, OutlinedInput, FormControl, IconButton, FormHelperText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useHistory;
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push('/');
            showAlert("Account Created Successfully", "success")
        }
        else {
            showAlert("Invalid Credentials", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        < >
            <Alert alert={alert} />
            <section className="h-100 my-1">
                <div className="container h-100 ">
                    <div className=" row justify-content-sm-center h-100  ">
                        <div className=" col-md-7 col-sm-10 mt-2 ">
                            <div className='card shadow-lg '>
                                <div className='card-body p-4'>
                                    <Button className="mb-2" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/about" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>About</Button>
                                    <h2 style={{ fontWeight: "Bold" }}>Create a new account</h2>
                                    <p className="mb-1 sm-6"> We are excited to get you started.</p>
                                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                        <div className="mb-2 sm-6">
                                            <label htmlFor="name" className="text-muted">Name </label>
                                            <input id="name" type="text" className="form-control" name="name" placeholder='Enter your name' value={credentials.name} onChange={onChange} required autoFocus />
                                        </div>
                                        <div className="mb-2 sm-6">
                                            <label htmlFor="email" className="text-muted">Email </label>
                                            <input id="email" type="email" className="form-control" placeholder='Enter your email address' name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required autofocus />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-2 sm-4">
                                            <div className="mb-2 sm-6 w-100">
                                                <label htmlFor="password" className="text-muted">Password</label>
                                                <input type="password" className="form-control" placeholder='Password must contain 5+ characters' value={credentials.password} onChange={onChange} name="password" id="password" required />
                                            </div>
                                        </div>
                                        <div className="mb-2 sm-8">
                                            <div className="mb-2 sm-4 w-100">
                                                <label htmlFor="cpassword" className="text-muted">Confirm Password</label>
                                                <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} placeholder='Retype password to confirm' name="cpassword" id="cpassword" required />
                                            </div>
                                        </div>
                                        <Button type="submit" fullWidth size="large" className=" mt-1 mb-2 sm-6" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Register now</Button>
                                    </form>
                                    <div className="card-footer border-0">
                                        <div className="text-center">
                                            <p>Have an account? <Link to="/login" className="text-primary">Login</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Signup