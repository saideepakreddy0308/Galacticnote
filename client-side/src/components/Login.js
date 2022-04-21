import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useContext, useState } from 'react'
import { TextField, Button, InputAdornment, InputLabel, OutlinedInput, FormControl, IconButton, FormHelperText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Alert from "./Alert";
const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();
    const [alert, setAlert] = useState(null);
    const [showPassword, setShowPassword] = useState(false)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
            <Alert alert={alert} />
            <section className="vh-100 my-3  " >
                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100 container">
                        <div className=" col-md-7 col-sm-9">
                            <div className="card shadow-lg" onSubmit={handleSubmit}>
                                <div className="card-body p-5">
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
                                            <div className="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className=" mb-2 w-100">
                                                <div className='flex col-xs-4'>
                                                    <label htmlFor="password" className="text-muted">Password</label>
                                                </div>
                                                <div className="input-group w-100" id="show_hide_password">
                                                    <input type={showPassword ? 'text' : 'password'} className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" required
                                                        label="Password" />
                                                    <div className="border-start-0 border-dark input-group-addon">
                                                        <Button className="border-start-0 text-dark "
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            type="button"
                                                            style={{ backgroundColor: "#EEEEEE", opacity: "0.9" }}
                                                        >
                                                            {showPassword ? "Hide" : "Show"}
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Link to="/login" className="float-end">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>
                                        <div className="mt-3 w-100 align-items-center ">
                                            <div className="form-check">
                                                <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                                <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary ms-auto mt-1">Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer py-2 border-0 ">
                                    <div className="text-center">
                                        <p>Don't have an account? <a href="/signup" className="text-primary">Create One</a></p>
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
export default Login