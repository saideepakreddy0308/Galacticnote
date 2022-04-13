import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import './Login.css'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

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
            props.showAlert("Logged in Successfully", "success")
            history.push("/");

        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='mt-3'>
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

            <section class="h-80" >
                <div class="container h-80">
                    <div class="row justify-content-sm-center h-100">
                        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div class="text-center my-3">
                                <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="70" />
                            </div>
                            <div class="card shadow-lg" onSubmit={handleSubmit}>
                                <div class="card-body p-5">
                                    <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
                                    <form method="POST" class="needs-validation" novalidate="" autocomplete="on">
                                        <div class="mb-3">
                                            <label htmlFor="email" className="text-muted">Email </label>
                                            <input id="email" type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required autofocus />
                                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                            <div class="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <div class="mb-2 w-100">
                                                <label htmlFor="password" className="text-muted">Password</label>
                                                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" required />
                                                {/* <a href="forgot.html" class="float-end">
                                                    Forgot Password?
                                                </a> */}
                                            </div>
                                            <div class="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        {/* <div class="d-flex align-items-center text-center"> */}
                                        <div class="my-3 w-100 align-items-center text-center">
                                            {/* <div class="form-check">
                                                <input type="checkbox" name="remember" id="remember" class="form-check-input" />
                                                <label for="remember" class="form-check-label">Remember Me</label>
                                            </div> */}
                                            <button type="submit" className="btn btn-primary ms-auto">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer py-2 border-0">
                                    <div class="text-center">
                                        Don't have an account? <a href="/signup" class="text-primary text-decoration-none">Create One</a>
                                    </div>
                                </div>
                            </div>
                             <div class="text-center mt-5 ">
                             <a href="https://github.com/saideepakreddy0308" className='text-decoration-none text-dark text-muted'> Copyright &copy; &mdash; Sai Deepak Reddy Kamaganikuntla</a>
                                {/* Copyright &copy; 2017-2021 &mdash; Your Company */}
                            </div> 
                            {/* <Footer /> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Login