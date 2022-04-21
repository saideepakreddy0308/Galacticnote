import React from 'react'
import Navbar from "./Navbar";
import '../styles/about.css';
import login from '../images/about - awesome.svg'
import { Link } from "react-router-dom";
import img2 from "../images/img2.jpg";
function About() {
    return (<>
        <Navbar />
        <div className='bg-light'>
            <div className="text-white aboutImg text-center vh-100">
                <div className="note-img">
                    <h1 className="display-5 ">Everything is connected</h1>
                    <p className=''>The human brain is non-linear: we jump from idea to idea, all the time. Your second brain should work the same.</p>
                </div>
            </div>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "#9C27B0" }}>Internet’s visuals</span> </h2>
                        <p>We made it to remember everything and tackle any project with your notes and schedule all in one place.</p>
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={{ color: "#9C27B0" }}>Awesome</span> </h2>
                        <p>
                            It's notebook on cloud, where you can create, edit, upload, delete your notes/information privately and securely. It's totally responsive so you can enjoy reading and working on your notes anytime, anywhere available on any device.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome rounded max-width: 100% h-100" src={img2} alt="about-awesome" />
                    </div>
                </div>
                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Organize your <span style={{ color: "#9C27B0" }}>Life</span> </h2>
                        <p>Whether it's bookmarks or passwords, files or shopping lists...Galacticnote organizes it all and makes it easy to find later. Sync across your devices. Leave nothing behind.
                        </p>
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>The <span style={{ color: "#9C27B0" }}>Encryption</span></h2>
                        <p>
                            Galacticnote’s encryption works by generating a key for you based on your email and password. This key is used to lock and unlock (or encrypt and decrypt) your data and keep it private. All of the encryption in Galacticnote happens before any data leaves the app, meaning that even if someone is snooping in on your connection or someone hacks our database, everything you’ve put into Galacticnote is just gibberish to them.</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0" }}>G</span>alacticnote</span>
                            <h6 className="logo_describe">Keep your notes private - Available anytime and anywhere</h6>
                        </div>
                        <div className="media-icons">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/">Your Notes</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/login">Sign-in</Link></li>
                            <li><Link to="/signup">Join Free</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Top Categories</li>
                            <li><Link to="/c/61554bfe801949ad7b9be4ff">Travel Notes</Link></li>
                            <li><Link to="/c/61554c2753bcf306407cb1bd">Music Notes</Link></li>
                            <li><Link to="/c/61554c43d2a6b15f764aff36">Canoe Notes</Link></li>
                            <li><Link to="c/61554c63dfd6a37d71449b5c">Survivalist Notes</Link></li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">About Galacticnote</li>
                            <li style={{ color: "#F7FFFF" }}>
                                Notebook on cloud, where you can create, edit, upload, delete your notes/information privately and securely.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2021 <Link to="/">Galacticnote</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                            <Link to="/">Go paperless :)</Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    </>)
}
export default About