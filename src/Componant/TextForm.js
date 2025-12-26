import React, { useState } from 'react'

function TextForm(props) {
    // Copy text
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
         props.showAlert("Copy text","success")

    }

    // Remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
         props.showAlert("Remove extra spaces","success")
        
    }
    // Clear text
    const handleClearText = () => {
        setText("");
         props.showAlert("Clear text","success")

    }

    const handelUpClick = () => {
        console.log('uppercase was cliked' + text)
        let newText = text.toUpperCase();
        setText(newText)
         props.showAlert("convert to Uppercase","success")
        
    }
    const handeLoClick = () => {
        console.log('uppercase was cliked' + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to Lowerrcase","success")

    }
    const handelOnChange = (event) => {
        console.log('uppercase was cliked')
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container my-3'>
                <>
                    <h1 style={{ color: props.mode === "dark" ? 'white' : 'black' }}>{props.heading} </h1>
                    <div className="mb-4">

                        <textarea className="form-control" id="mybox" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === "dark" ? '#0a292bff' : 'white', color: props.mode === "dark" ? 'white' : 'black' }} rows="10"></textarea>
                    </div></>
                <button className="btn btn-primary mx-2" onClick={handelUpClick}>To uppercase</button>
                <button className="btn btn-success mx-2" onClick={handeLoClick}>To lowercase</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button className="btn btn-info mx-2 my-2" onClick={handleCopy}>
                    Copy Text
                </button>

                <button className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-secondary mx-2 my-2" onClick={handleClearText}>
                    Clear Text
                </button>

            </div>
            <div className='container my-4' >
                <h1 style={{ color: props.mode === "dark" ? 'white' : 'black' }}>Your Text Summary</h1>
                <p style={{ color: props.mode === "dark" ? 'white' : 'black' }}>{text.split(" ").filter(word => word.trim() !== "").length} words, {text.length} Characters</p>
                <p style={{ color: props.mode === "dark" ? 'white' : 'black' }}>{0.008 * text.split(" ").length} minutes to read</p>
                <h2 style={{ color: props.mode === "dark" ? 'white' : 'black' }}> Preview</h2>
                <p style={{ color: props.mode === "dark" ? 'white' : 'black' }}>{text.length>0? text:"Somthing write to preview it here"}</p>
            </div>
        </>

    )
}

export default TextForm
