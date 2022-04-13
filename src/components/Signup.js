import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword: ""}) 
    let history = useHistory;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/"); 
            props.showAlert("Account Created Successfully","success")
        }
        else{
            props.showAlert("Invalid Credentials","danger")
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
        <section className="h-80" onSubmit={handleSubmit}>
		<div className="container h-80">
			<div className="row justify-content-sm-center h-100">
				<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div className="text-center my-3">
						<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="70" />
					</div>
					<div className="card shadow-lg" >
						<div className="card-body p-5">
							<h1 className="fs-4 card-title fw-bold mb-4">Signup</h1>
							<form method="POST" className="needs-validation" novalidate="" autocomplete="off">
                            <div className="mb-3">
                                            <label htmlFor="name" className="text-muted">Name </label>
                                            <input id="name" type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} required autofocus />
                                            
                                        </div>
                            <div className="mb-3">
                                            <label htmlFor="email" className="text-muted">Email </label>
                                            <input id="email" type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required autofocus />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                            
                                        </div>

                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label htmlFor="password" className="text-muted">Password</label>
                                                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" required />
                                                {/* <a href="forgot.html" className="float-end">
                                                    Forgot Password?
                                                </a> */}
                                            </div>

                                        </div>

                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label htmlFor="cpassword" className="text-muted">Confirm Password</label>
                                                <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" required />
                                                {/* <a href="forgot.html" className="float-end">
                                                    Forgot Password?
                                                </a> */}
                                            </div>
                                            
                                        </div>

								{/* <div className="d-flex align-items-center">
									<div className="form-check">
										<input type="checkbox" name="remember" id="remember" className="form-check-input" />
										<label for="remember" className="form-check-label">Remember Me</label>
									</div>
									<button type="submit" className="btn btn-primary ms-auto">
										Login
									</button>
								</div> */}
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
						<div className="card-footer py-2 border-0">
							<div className="text-center">
								Already have an account? <a href="/login" className="text-primary text-decoration-none">Login</a>
							</div>
						</div>
					</div>
					<div class="text-center mt-5 ">
                             <a href="https://github.com/saideepakreddy0308" className='text-decoration-none text-dark text-muted'> Copyright &copy; &mdash; Sai Deepak Reddy Kamaganikuntla</a>
                                {/* Copyright &copy; 2017-2021 &mdash; Your Company */}
                            </div> 
				</div>
			</div>
		</div>
	</section>
    )
}

export default Signup