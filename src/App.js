import logo from './logo.svg';
import Navbar from './MyComponents/Navbar'; 
import TextForm from './MyComponents/TextForm'; 
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <TextForm heading="Enter the text to analyze below"/> 
    </div>
    </>
  );
}

export default App;
