import React, {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');



  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1000);
  }



  const toggleMode = () =>{
    if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = '#343a40';
    showAlert('Dark Mode Enabled', 'success ');
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('Light Mode Enabled','success ');


  }
}
return (
    <>
    {/* <Router> */}
    <Navbar title="Textinator" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />}>
      </Route> */}
      <TextForm showAlert = {showAlert} heading="Input your text" mode={mode}/>
      {/* }> */}
      {/* </Route> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
