import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import './Login.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
// import React, { useContext, useState } from 'react'
import { TextField, Button, InputAdornment, InputLabel, OutlinedInput, FormControl, IconButton, FormHelperText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
// import { Link, useNavigate, useLocation } from "react-router-dom";
// // import "../styles/home.css"
import Alert from "./Alert";
// import { AlertContext } from '../context/AlertContext';
// import { useFormik } from 'formik'
// import * as Yup from 'yup';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();
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
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            showAlert("Logged in Successfully", "success")
            history.push("/");

        }
        else {
            showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <>
            {/* <Alert alert={{alert}}/>  */}
            <Alert alert={alert} />
            {/* <div className=' vh-75 my-5 '> */}
                {/* <h2>Login to continue to CloudNotes</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}

                <section className="vh-100 my-3  " >
                    <div className="container h-100">
                        <div className="row justify-content-sm-center h-100 container">
                            {/* <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9"> */}
                            <div className=" col-md-7 col-sm-9">
                                {/* <div className="container mt-5 addnotes" > */}

                                {/* <div className="text-center my-3">
                                <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="70" />
                            </div> */}
                                <div className="card shadow-lg" onSubmit={handleSubmit}>
                                    <div className="card-body p-5">
                                        {/* <h1 className="fs-4 card-title fw-bold mb-4">Login</h1> */}
                                        <Button className="mb-2" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/about" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>About</Button>
                                        <h2 style={{ fontWeight: "Bold" }}>Login</h2>
                                        <p className="mb-3">Sign in on the internal platform</p>
                                        <div className="d-flex">
                                            <Button size="small" fullWidth className="mb-3 me-4" variant="contained" color="primary" startIcon={<FacebookIcon />} component={Link} to="/login" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Facebook</Button>
                                            <Button size="small" fullWidth className="mb-3" variant="contained" color="error" startIcon={<GoogleIcon />} component={Link} to="/login" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Google</Button>
                                        </div>
                                        <p className="mb-2 d-flex justify-content-center">or enter your credentials.</p>
                                        <form method="POST" className="needs-validation" noValidate="" autoComplete="off">
                                            <div className="mb-3">
                                                <label htmlFor="email" className="text-muted">Email </label>
                                                <input id="email" type="email" placeholder='name@company.com' className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required autoFocus />
                                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                                <div className="invalid-feedback">
                                                    Email is invalid
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <div className="mb-2 w-100">
                                                    <label htmlFor="password" className="text-muted">Password</label>
                                                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" required />
                                                    {/* <a href="forgot.html" className="float-end">
                                                    Forgot Password?
                                                </a> */}
                                                </div>
                                                <div className="invalid-feedback">
                                                    Password is required
                                                </div>
                                            </div>

                                            {/* <div className="d-flex align-items-center text-center"> */}
                                            <div className="mt-3 w-100 align-items-center text-center">
                                                {/* <div className="form-check">
                                                <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                                <label for="remember" className="form-check-label">Remember Me</label>
                                            </div> */}
                                                <button type="submit" className="btn btn-primary ms-auto">Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer py-2 border-0 ">
                                        <div className="text-center">
                                            Don't have an account? <a href="/signup" className="text-primary">Create One</a>
                                        </div>
                                    </div>
                                </div>

                                {/* <Footer /> */}
                            </div>
                        </div>
                    </div>
                </section>
            {/* </div> */}
             {/* /// <div className="text-center mt-5 vh-25 ">
                <a href="https://github.com/saideepakreddy0308" className='text-decoration-none text-dark'> Copyright &copy; &mdash; Sai Deepak Reddy Kamaganikuntla</a>
                Copyright &copy; 2017-2021 &mdash; Your Company
            </div>  */}
        </>
    )
}



export default Login