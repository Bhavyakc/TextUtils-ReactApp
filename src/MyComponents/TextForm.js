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

    const handleonChange=(event)=>{
        settext(event.target.value);
    }
    const words=text.split(" ").length 
    return (  
      <>
      <div className="mb-3 my-4">
        <h1>
          {props.heading} 
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

      
      <div className="mb-3 my-5">
        <h2>Your text Summary</h2>
        <div> <b> {words} </b> words {text.length} characters</div>
        <h2>Preview</h2>
        <p> {text} </p>
        <b> {0.004 * words } Minutes read</b> 
      </div>
    </>
  );
}

export default TextForm;
