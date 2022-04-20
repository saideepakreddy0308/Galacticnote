// import Notes from './Notes';

// export const Home = (props) => {
// const {showAlert} = props
//     return (
//         <div> 
//             <Notes showAlert={showAlert}/>
//         </div>
//     )
// }

import {React,useState} from 'react'
import noteImg from '../inotebook.svg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "./home.css"
import Notes from './Notes';
import Navbar from "./Navbar";
import Alert from "./Alert";

function Home(props) {
    console.log('hii')
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
            {/* <Alertss /> */}
            {/* <Notes showAlert={showAlert}/> */}
            <div className="container-fluid bg-light" >
            <Alert alert={alert}/>
            <div>
                <div className="row mb-5">
                    <div className="col-md-5">
                        <h1 className="display-1 pt-5 ps-5 respo"><span style={{ color: "#9C27B0" }}>G</span>alacticnote</h1>
                        <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>The secure, powerful notebook</p>
                        <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>This is the Notebook you'll never lose because it syncs to the cloud and across your devices. It's always backed-up and always up to date. Enjoy reading and working on your notes anytime, anywhere.</p>
                        <p className='ps-5 mt-1 '><Link to="/about" className='text-decoration-none'>About us</Link> </p>
                        {/* <div className="d-flex justify-content-center">
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div> */}
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img className="img-fluid" style={{width: "75%"}} src={noteImg} alt="iNotebook" />
                    </div>
                    </div>
                

                {/* <Notes /> */}
                
                <Notes showAlert={showAlert}/>
                {/* <div className="text-center mt-1">
                <a href="https://github.com/saideepakreddy0308" className='text-decoration-none text-dark'> Sai Deepak Reddy Kamaganikuntla :)</a>
            </div> */}
            </div>
            </div>
        </>
    )
}

export default Home