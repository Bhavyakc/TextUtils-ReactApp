import logo from './logo.svg';
import Navbar from './MyComponents/Navbar'; 
import TextForm from './MyComponents/TextForm'; 
import './App.css';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');
  
  const toggleMode=()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'; 
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading="Enter the text to analyze below" mode={mode} /> 
    </div>
    </>
  );
}

export default App;
