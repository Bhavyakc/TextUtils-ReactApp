import React,{useState} from "react";

function TextForm(props) {
    const [text, settext] = useState("");
    
    const handleUpClick=()=>{
      let newtext=text.toUpperCase();
      settext(newtext);
    }
    
    const handleDownClick=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    const clearText =()=>{
      let newtext="";
      settext(newtext);
    }
    const speak=()=>{
      let msg = new SpeechSynthesisUtterance();
      msg.text=text;
      window.speechSynthesis.speak(msg);
    }
    //Most important function will get call everytime we write something in textarea
    const handleonChange=(event)=>{
        settext(event.target.value);
    }

    const copyText = () => {
      if (text) {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard:'+ text);
      }else{
        alert('Nothing copy from  clipboard');
      }
    }
    const removeExtraSpaces = () => {
      const cleanedText = text.replace(/\s+/g, ' ').trim();
      settext(cleanedText);
    }
    const words=text.trim().split(/\s+/).filter((word) => word !== '').length;
    

    return (  
      <>
      <div className="container mb-3 my-4" style={{color:props.mode==='dark'?'white':'black' }}>
        <h1  >
          {props.heading }  
          <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </h1>
        <textarea  
          style={
            {backgroundColor:props.mode==='dark'?'black':'white' ,          color:props.mode==='dark'?'white':'black'}
          }
          value={text}
          onChange={handleonChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
        />
      </div>
     
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
      <button className="btn btn-danger mx-2" onClick={clearText}>Clear</button>
      <button className="btn btn-dark mx-2" onClick={copyText}>Copy</button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      
      <div className="mb-3 my-3"  style={{color:props.mode==='dark'?'white':'black' }} >
        <div className="col-md-6">
        <h2>Your text Summary </h2> <b> {0.004 * words } Minutes read</b>
        </div>
        {/* Eg. 4 words 15 characters */}
        <div> <b> {words} </b> words  <b>{text.trim().length}</b> characters
        </div> 
        <h2>Preview</h2>
        <p> {text.length===0?"Nothing to display":text} </p>
         
      </div>
    </>
  );
}

export default TextForm;
