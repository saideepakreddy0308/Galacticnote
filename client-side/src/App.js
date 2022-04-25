import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import AddNote from './components/AddNote';
import { useState } from 'react';
function App() {
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
  return (
    <>
      <NoteState>
        <Router>
          {/* <Navbar /> */}
          {/* <Alert alert={alert}/> */}
          {/* <div className="container"> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/addnote' component={AddNote} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
          {/* </div> */}
        </Router>
      </NoteState>
    </>
  );
}

export default App;