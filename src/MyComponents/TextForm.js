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
    const handleonChange=(event)=>{
        settext(event.target.value);
    }
    const words=text.trim().split(/\s+/).filter((word) => word !== '').length;
    

    return (  
      <>
      <div className="mb-3 my-4">
        <h1>
          {props.heading}  
          <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </h1>
        <textarea
          value={text}
          onChange={handleonChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
        />
      </div>
     
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
      <button className="btn btn-danger mx-2" onClick={clearText}>Clear</button>

      
      <div className="mb-3 my-3">
        <div className="col-md-6">
        <h2>Your text Summary </h2> <b> {0.004 * words } Minutes read</b>
        </div>
        <div> <b> {words} </b> words  <b>{text.trim().length}</b> characters
        </div>
        <h2>Preview</h2>
        <p> {text} </p>
         
      </div>
    </>
  );
}

export default TextForm;
