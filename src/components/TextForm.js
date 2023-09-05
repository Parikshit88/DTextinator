import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpperCaseClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case','success ')
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleRESClick = () =>{
        const eS = /[ ]+/g;
        let newText = text.replace(eS, " ");
        setText(newText);
        props.showAlert('Removed Extra Spaces','success ')
    }
    
    const handleLowerCaseClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case','success ')
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Cleared Text','success ')
    }
    const handleRemoveSCClick= () => {
        const pattern = /[!~@#$`%>^&;*(<)?{|}<://]/g;
        let newText = text.replace(pattern, '');
        setText(newText);
        props.showAlert('Removed Special Characters','success ')
    }
   
    const[text, setText] = useState(''); 
  return (
    <>
    <div className="container" style = {{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    <h1 style={{color: props.mode==='dark'?'white':'#343a40'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'#343a40'}} id="myBox" rows="12"></textarea>        
        </div>
        <button className="btn btn-secondary mx-2" style = {{backgroundColor: props.mode==='dark'?'white':'#343a40',color: props.mode==='dark'?'#343a40':'white', cursor: 'pointer'}} onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-2" style = {{backgroundColor: props.mode==='dark'?'white':'#343a40',color: props.mode==='dark'?'#343a40':'white', cursor: 'pointer'}} onClick={handleLowerCaseClick}>Convert to Lowercase</button>
        <button className="btn btn-secondary mx-2" style = {{backgroundColor: props.mode==='dark'?'white':'#343a40',color: props.mode==='dark'?'#343a40':'white', cursor: 'pointer'}} onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-secondary mx-2" style = {{backgroundColor: props.mode==='dark'?'white':'#343a40',color: props.mode==='dark'?'#343a40':'white', cursor: 'pointer'}} onClick={handleRemoveSCClick}>Remove Special Characters</button>
        <button className="btn btn-secondary mx-2" style = {{backgroundColor: props.mode==='dark'?'white':'#343a40',color: props.mode==='dark'?'#343a40':'white', cursor: 'pointer'}} onClick={handleRESClick}>Remove Extra Spaces</button>

  </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#343a40'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter(word => word !== '').length} words and {text.length} characters</p>
                        <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
  </>
  )

}
