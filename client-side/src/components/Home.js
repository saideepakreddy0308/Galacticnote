import {React,useState} from 'react'
import noteImg from '../images/inotebook.svg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import Notes from './Notes';
import Navbar from "./Navbar";
import Alert from "./Alert";
function Home(props) {
    const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
    return (
        <>
            <Navbar />
            <div className="container-fluid bg-light" >
            <Alert alert={alert}/>
            <div className="row d-flex justify-content-space-between">
                <div className="row vh-100 ">
                    <div className="col-md-5 ">
                        <h1 className="display-1 pt-5 ps-5 respo" style={{ fontFamily: "'Square Peg', cursive" }}><span style={{ color: "#9C27B0" }}>G</span>alacticnote</h1>
                        <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>The secure, powerful notebook</p>
                        <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>This is the Notebook you'll never lose because it syncs to the cloud and across your devices. It's always backed-up and always up to date. Enjoy reading and working on your notes anytime, anywhere.</p>
                        <Button className="ms-5 mb-3 text-decoration-none" variant="text" color="secondary" component={Link} to="/about" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>About us</Button>
                        <div className="d-flex mt-1 justify-content-center">
                            <Button component={Link} to="/addnote" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.0rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img className="img-fluid" style={{width: "75%"}} src={noteImg} alt="iNotebook" />
                    </div>
                </div>
                <Notes showAlert={showAlert}/>
            </div>
            </div>
        </>
    )
}
export default Home