import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import avataars from '../images/avataaars.png'
// import React, { useContext, useState } from 'react'
import { TextField, Button, InputAdornment, InputLabel, OutlinedInput, FormControl, IconButton, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
// import avataars from "../images/avataaars.png"
// import Alertss from "./Alertss";
import Alert from "./Alert";
// import { AlertContext } from '../context/AlertContext';
// import { useFormik } from 'formik'
// import * as Yup from 'yup';

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
        // <div className="container mt-2">
        //     <h2 className='my-3'>Create an account to use CloudNotes</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-3">
        //             <label htmlFor="name">Name</label>
        //             <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="email">Email address</label>
        //             <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
        //             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="password">Password</label>
        //             <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="cpassword">Confirm Password</label>
        //             <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
        //         </div>

        //         <button type="submit" className="btn btn-primary">Submit</button>
        //     </form>
        // </div>


        // <div className='container col-md-7 col-sm-9 mt-3'>
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
                                        {/* <a href="forgot.html" className="float-end">
                                                    Forgot Password?
                                                </a> */}
                                    </div>

                                </div>

                                <div className="mb-2 sm-8">
                                    <div className="mb-2 sm-4 w-100">
                                        <label htmlFor="cpassword" className="text-muted">Confirm Password</label>
                                        <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} placeholder='Retype password to confirm' name="cpassword" id="cpassword" required />
                                        {/* <a href="forgot.html" className="float-end">
                                                    Forgot Password?
                                                </a> */}
                                    </div>

                                </div>

                                <Button type="submit" fullWidth size="large" className=" mt-1 mb-2 sm-6" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Register now</Button>
                            </form>
                            <div className="card-footer border-0">
                                        <div className="text-center">
                                        Have an account? <Link to="/login" className="text-primary">Login</Link>
                                        </div>
                                    </div>
                            {/* <p>Have an account? <Link to="/login" >login</Link> </p> */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


    //     <section className="h-80" onSubmit={handleSubmit}>
    // 	<div className="container h-80">
    // 		<div className="row justify-content-sm-center h-100">
    // 			<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
    // 				<div className="text-center my-3">
    // 					<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="70" />
    // 				</div>
    // 				<div className="card shadow-lg" >
    // 					<div className="card-body p-5">
    // 						<h1 className="fs-4 card-title fw-bold mb-4">Signup</h1>
    // 						<form method="POST" className="needs-validation" novalidate="" autocomplete="off">
    //                         <div className="mb-3">
    //                                         <label htmlFor="name" className="text-muted">Name </label>
    //                                         <input id="name" type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} required autofocus />

    //                                     </div>
    //                         <div className="mb-3">
    //                                         <label htmlFor="email" className="text-muted">Email </label>
    //                                         <input id="email" type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required autofocus />
    //                                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

    //                                     </div>

    //                                     <div className="mb-3">
    //                                         <div className="mb-2 w-100">
    //                                             <label htmlFor="password" className="text-muted">Password</label>
    //                                             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" required />
    //                                             {/* <a href="forgot.html" className="float-end">
    //                                                 Forgot Password?
    //                                             </a> */}
    //                                         </div>

    //                                     </div>

    //                                     <div className="mb-3">
    //                                         <div className="mb-2 w-100">
    //                                             <label htmlFor="cpassword" className="text-muted">Confirm Password</label>
    //                                             <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" required />
    //                                             {/* <a href="forgot.html" className="float-end">
    //                                                 Forgot Password?
    //                                             </a> */}
    //                                         </div>

    //                                     </div>

    // 							{/* <div className="d-flex align-items-center">
    // 								<div className="form-check">
    // 									<input type="checkbox" name="remember" id="remember" className="form-check-input" />
    // 									<label for="remember" className="form-check-label">Remember Me</label>
    // 								</div>
    // 								<button type="submit" className="btn btn-primary ms-auto">
    // 									Login
    // 								</button>
    // 							</div> */}
    //                              <div className="my-3 w-100 align-items-center text-center">
    //                                         {/* <div className="form-check">
    //                                             <input type="checkbox" name="remember" id="remember" className="form-check-input" />
    //                                             <label for="remember" className="form-check-label">Remember Me</label>
    //                                         </div> */}
    //                                         <button type="submit" className="btn btn-primary ms-auto">Submit
    //                                         </button>
    //                                     </div>
    // 						</form>
    // 					</div>
    // 					<div className="card-footer py-2 border-0">
    // 						<div className="text-center">
    // 							Already have an account? <a href="/login" className="text-primary text-decoration-none">Login</a>
    // 						</div>
    // 					</div>
    // 				</div>
    // 				<div className="text-center mt-5 ">
    //                          <a href="https://github.com/saideepakreddy0308" className='text-decoration-none text-dark text-muted'> Copyright &copy; &mdash; Sai Deepak Reddy Kamaganikuntla</a>
    //                             {/* Copyright &copy; 2017-2021 &mdash; Your Company */}
    //                         </div> 
    // 			</div>
    // 		</div>
    // 	</div>
    // </section>

    // )
}

export default Signup